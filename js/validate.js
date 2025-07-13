$(function () {
    $('#form').validate({
        rules: {
            "お名前": {
                required: true,
            },
            "ふりがな": {
                required: true,
            },
            "電話番号": {
                required: true,
                tel: "true",
            },
            "メールアドレス": {
                required: true,
                email: "true",
            },
            "お問い合わせ内容": {
                required: true,
            },
        },
        messages: {
            "お名前": {
                required: "お名前をご入力してください",
            },
            "ふりがな": {
                required: "ふりがなをご入力してください",
            },
            "電話番号": {
                required: "電話番号をご入力してください",
                tel: "正しい電話番号の形式でご入力して下さい",
            },
            "メールアドレス": {
                required: "メールアドレスをご入力してください",
                email: "正しいメールアドレスの形式で入力して下さい",
            },
            "お問い合わせ内容": {
                required: "お問い合わせ内容をご入力してください",
            },
        },
        errorElement: 'em',
        errorPlacement: function (error, element) {
            error.insertAfter(element)
        },
    })
})