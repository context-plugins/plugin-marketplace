using System;
using System.Text.Json.Serialization;
using AmazonLex.Core.Enum;

namespace AmazonLex.Models.Enums;

/// <summary>
/// The content type of the message string.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<ContentType2>))]
public sealed record ContentType2 : OpenStringEnum<ContentType2>
{
    private ContentType2(string value) : base(value)
    {
    }

    public static readonly ContentType2 PlainText = new("PlainText");

    public static readonly ContentType2 Ssml = new("SSML");

    public static readonly ContentType2 CustomPayload = new("CustomPayload");

    public TResult Match<TResult>(Func<TResult> onPlainText,
        Func<TResult> onSsml,
        Func<TResult> onCustomPayload,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == PlainText => onPlainText(),
            _ when this == Ssml => onSsml(),
            _ when this == CustomPayload => onCustomPayload(),
            _ => otherwise(Value)
        };

    public void Match(Action onPlainText, Action onSsml, Action onCustomPayload, Action<string> otherwise)
    {
        if (this == PlainText) onPlainText();
        else if (this == Ssml) onSsml();
        else if (this == CustomPayload) onCustomPayload();
        else otherwise(Value);
    }
}
