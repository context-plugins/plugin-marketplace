using System;
using System.Text.Json.Serialization;
using AmazonLex.Core.Enum;

namespace AmazonLex.Models.Enums;

/// <summary>
/// The type of the response. The following values are possible: PlainText – A plain text string. CustomPayload – A response string that you can customize to include data or metadata for your application. SSML – A string that includes Speech Synthesis Markup Language to customize the audio response. ImageResponseCard – An image with buttons that the customer can select. See ImageResponseCard for more information.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<ContentType1>))]
public sealed record ContentType1 : OpenStringEnum<ContentType1>
{
    private ContentType1(string value) : base(value)
    {
    }

    public static readonly ContentType1 PlainText = new("PlainText");

    public static readonly ContentType1 CustomPayload = new("CustomPayload");

    public static readonly ContentType1 Ssml = new("SSML");

    public static readonly ContentType1 ImageResponseCard = new("ImageResponseCard");

    public TResult Match<TResult>(Func<TResult> onPlainText,
        Func<TResult> onCustomPayload,
        Func<TResult> onSsml,
        Func<TResult> onImageResponseCard,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == PlainText => onPlainText(),
            _ when this == CustomPayload => onCustomPayload(),
            _ when this == Ssml => onSsml(),
            _ when this == ImageResponseCard => onImageResponseCard(),
            _ => otherwise(Value)
        };

    public void Match(Action onPlainText,
        Action onCustomPayload,
        Action onSsml,
        Action onImageResponseCard,
        Action<string> otherwise)
    {
        if (this == PlainText) onPlainText();
        else if (this == CustomPayload) onCustomPayload();
        else if (this == Ssml) onSsml();
        else if (this == ImageResponseCard) onImageResponseCard();
        else otherwise(Value);
    }
}
