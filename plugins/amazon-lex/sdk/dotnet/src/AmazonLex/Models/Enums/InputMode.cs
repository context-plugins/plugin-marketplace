using System;
using System.Text.Json.Serialization;
using AmazonLex.Core.Enum;

namespace AmazonLex.Models.Enums;

/// <summary>
/// Indicates whether the input to the operation was text, speech, or from a touch-tone keypad.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<InputMode>))]
public sealed record InputMode : OpenStringEnum<InputMode>
{
    private InputMode(string value) : base(value)
    {
    }

    public static readonly InputMode Text = new("Text");

    public static readonly InputMode Speech = new("Speech");

    public static readonly InputMode Dtmf = new("DTMF");

    public TResult Match<TResult>(Func<TResult> onText,
        Func<TResult> onSpeech,
        Func<TResult> onDtmf,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Text => onText(),
            _ when this == Speech => onSpeech(),
            _ when this == Dtmf => onDtmf(),
            _ => otherwise(Value)
        };

    public void Match(Action onText, Action onSpeech, Action onDtmf, Action<string> otherwise)
    {
        if (this == Text) onText();
        else if (this == Speech) onSpeech();
        else if (this == Dtmf) onDtmf();
        else otherwise(Value);
    }
}
