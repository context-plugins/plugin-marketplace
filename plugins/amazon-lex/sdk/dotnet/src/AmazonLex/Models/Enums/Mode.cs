using System;
using System.Text.Json.Serialization;
using AmazonLex.Core.Enum;

namespace AmazonLex.Models.Enums;

/// <summary>
/// The mode of the session. The possible values are as follows: Speech – The session was spoken. Text – The session was written. DTMF – The session used a touch-tone keypad (Dual Tone Multi-Frequency). MultiMode – The session used multiple modes.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Mode>))]
public sealed record Mode : OpenStringEnum<Mode>
{
    private Mode(string value) : base(value)
    {
    }

    public static readonly Mode Speech = new("Speech");

    public static readonly Mode Text = new("Text");

    public static readonly Mode Dtmf = new("DTMF");

    public static readonly Mode MultiMode = new("MultiMode");

    public TResult Match<TResult>(Func<TResult> onSpeech,
        Func<TResult> onText,
        Func<TResult> onDtmf,
        Func<TResult> onMultiMode,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Speech => onSpeech(),
            _ when this == Text => onText(),
            _ when this == Dtmf => onDtmf(),
            _ when this == MultiMode => onMultiMode(),
            _ => otherwise(Value)
        };

    public void Match(Action onSpeech, Action onText, Action onDtmf, Action onMultiMode, Action<string> otherwise)
    {
        if (this == Speech) onSpeech();
        else if (this == Text) onText();
        else if (this == Dtmf) onDtmf();
        else if (this == MultiMode) onMultiMode();
        else otherwise(Value);
    }
}
