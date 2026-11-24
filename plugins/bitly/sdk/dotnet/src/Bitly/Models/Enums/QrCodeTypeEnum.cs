using System;
using System.Text.Json.Serialization;
using Bitly.Core.Enum;

namespace Bitly.Models.Enums;

/// <summary>
/// The type of dynamic/static content the QR serves, e.g. Link In Bio page, micro site, bitlink, email, text, Wifi, etc.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<QrCodeTypeEnum>))]
public sealed record QrCodeTypeEnum : OpenStringEnum<QrCodeTypeEnum>
{
    private QrCodeTypeEnum(string value) : base(value)
    {
    }

    public static readonly QrCodeTypeEnum Bitlink = new("bitlink");

    public static readonly QrCodeTypeEnum LongUrl = new("long_url");

    public static readonly QrCodeTypeEnum LinkInBio = new("link_in_bio");

    public static readonly QrCodeTypeEnum VCard = new("v_card");

    public static readonly QrCodeTypeEnum Wifi = new("wifi");

    public static readonly QrCodeTypeEnum Email = new("email");

    public static readonly QrCodeTypeEnum Phone = new("phone");

    public static readonly QrCodeTypeEnum Text = new("text");

    public TResult Match<TResult>(Func<TResult> onBitlink,
        Func<TResult> onLongUrl,
        Func<TResult> onLinkInBio,
        Func<TResult> onVCard,
        Func<TResult> onWifi,
        Func<TResult> onEmail,
        Func<TResult> onPhone,
        Func<TResult> onText,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Bitlink => onBitlink(),
            _ when this == LongUrl => onLongUrl(),
            _ when this == LinkInBio => onLinkInBio(),
            _ when this == VCard => onVCard(),
            _ when this == Wifi => onWifi(),
            _ when this == Email => onEmail(),
            _ when this == Phone => onPhone(),
            _ when this == Text => onText(),
            _ => otherwise(Value)
        };

    public void Match(Action onBitlink,
        Action onLongUrl,
        Action onLinkInBio,
        Action onVCard,
        Action onWifi,
        Action onEmail,
        Action onPhone,
        Action onText,
        Action<string> otherwise)
    {
        if (this == Bitlink) onBitlink();
        else if (this == LongUrl) onLongUrl();
        else if (this == LinkInBio) onLinkInBio();
        else if (this == VCard) onVCard();
        else if (this == Wifi) onWifi();
        else if (this == Email) onEmail();
        else if (this == Phone) onPhone();
        else if (this == Text) onText();
        else otherwise(Value);
    }
}
