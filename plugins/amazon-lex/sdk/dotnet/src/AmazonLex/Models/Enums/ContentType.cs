using System;
using System.Text.Json.Serialization;
using AmazonLex.Core.Enum;

namespace AmazonLex.Models.Enums;

/// <summary>
/// Indicates the type of response.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<ContentType>))]
public sealed record ContentType : OpenStringEnum<ContentType>
{
    private ContentType(string value) : base(value)
    {
    }

    public static readonly ContentType CustomPayload = new("CustomPayload");

    public static readonly ContentType ImageResponseCard = new("ImageResponseCard");

    public static readonly ContentType PlainText = new("PlainText");

    public static readonly ContentType Ssml = new("SSML");

    public TResult Match<TResult>(Func<TResult> onCustomPayload,
        Func<TResult> onImageResponseCard,
        Func<TResult> onPlainText,
        Func<TResult> onSsml,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == CustomPayload => onCustomPayload(),
            _ when this == ImageResponseCard => onImageResponseCard(),
            _ when this == PlainText => onPlainText(),
            _ when this == Ssml => onSsml(),
            _ => otherwise(Value)
        };

    public void Match(Action onCustomPayload,
        Action onImageResponseCard,
        Action onPlainText,
        Action onSsml,
        Action<string> otherwise)
    {
        if (this == CustomPayload) onCustomPayload();
        else if (this == ImageResponseCard) onImageResponseCard();
        else if (this == PlainText) onPlainText();
        else if (this == Ssml) onSsml();
        else otherwise(Value);
    }
}
