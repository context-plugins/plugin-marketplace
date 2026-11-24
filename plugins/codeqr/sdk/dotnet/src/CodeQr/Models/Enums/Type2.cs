using System;
using System.Text.Json.Serialization;
using CodeQr.Core.Enum;

namespace CodeQr.Models.Enums;

/// <summary>
/// Filter by QR code type
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Type2>))]
public sealed record Type2 : OpenStringEnum<Type2>
{
    private Type2(string value) : base(value)
    {
    }

    public static readonly Type2 Url = new("url");

    public static readonly Type2 Text = new("text");

    public static readonly Type2 Email = new("email");

    public static readonly Type2 Wifi = new("wifi");

    public static readonly Type2 Phone = new("phone");

    public static readonly Type2 Vcard = new("vcard");

    public static readonly Type2 Crypto = new("crypto");

    public static readonly Type2 Sms = new("sms");

    public static readonly Type2 Facetime = new("facetime");

    public static readonly Type2 Geo = new("geo");

    public static readonly Type2 Latlog = new("latlog");

    public static readonly Type2 Pix = new("pix");

    public static readonly Type2 Whatsapp = new("whatsapp");

    public TResult Match<TResult>(Func<TResult> onUrl,
        Func<TResult> onText,
        Func<TResult> onEmail,
        Func<TResult> onWifi,
        Func<TResult> onPhone,
        Func<TResult> onVcard,
        Func<TResult> onCrypto,
        Func<TResult> onSms,
        Func<TResult> onFacetime,
        Func<TResult> onGeo,
        Func<TResult> onLatlog,
        Func<TResult> onPix,
        Func<TResult> onWhatsapp,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Url => onUrl(),
            _ when this == Text => onText(),
            _ when this == Email => onEmail(),
            _ when this == Wifi => onWifi(),
            _ when this == Phone => onPhone(),
            _ when this == Vcard => onVcard(),
            _ when this == Crypto => onCrypto(),
            _ when this == Sms => onSms(),
            _ when this == Facetime => onFacetime(),
            _ when this == Geo => onGeo(),
            _ when this == Latlog => onLatlog(),
            _ when this == Pix => onPix(),
            _ when this == Whatsapp => onWhatsapp(),
            _ => otherwise(Value)
        };

    public void Match(Action onUrl,
        Action onText,
        Action onEmail,
        Action onWifi,
        Action onPhone,
        Action onVcard,
        Action onCrypto,
        Action onSms,
        Action onFacetime,
        Action onGeo,
        Action onLatlog,
        Action onPix,
        Action onWhatsapp,
        Action<string> otherwise)
    {
        if (this == Url) onUrl();
        else if (this == Text) onText();
        else if (this == Email) onEmail();
        else if (this == Wifi) onWifi();
        else if (this == Phone) onPhone();
        else if (this == Vcard) onVcard();
        else if (this == Crypto) onCrypto();
        else if (this == Sms) onSms();
        else if (this == Facetime) onFacetime();
        else if (this == Geo) onGeo();
        else if (this == Latlog) onLatlog();
        else if (this == Pix) onPix();
        else if (this == Whatsapp) onWhatsapp();
        else otherwise(Value);
    }
}
