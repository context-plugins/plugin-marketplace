using System;
using System.Text.Json.Serialization;
using AmazonLex.Core.Enum;

namespace AmazonLex.Models.Enums;

/// <summary>
/// The mode of the session. The possible values are as follows: Speech – The session consisted of spoken dialogue. Text – The session consisted of written dialogue. DTMF – The session consisted of touch-tone keypad (Dual Tone Multi-Frequency) key presses. MultiMode – The session consisted of multiple modes.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Mode1>))]
public sealed record Mode1 : OpenStringEnum<Mode1>
{
    private Mode1(string value) : base(value)
    {
    }

    public static readonly Mode1 Speech = new("Speech");

    public static readonly Mode1 Text = new("Text");

    public static readonly Mode1 Dtmf = new("DTMF");

    public static readonly Mode1 MultiMode = new("MultiMode");

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
