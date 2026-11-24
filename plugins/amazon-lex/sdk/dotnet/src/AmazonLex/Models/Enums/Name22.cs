using System;
using System.Text.Json.Serialization;
using AmazonLex.Core.Enum;

namespace AmazonLex.Models.Enums;

/// <summary>
/// The metric that you requested. Count – The number of utterances. Missed – The number of utterances that Amazon Lex failed to recognize. Detected – The number of utterances that Amazon Lex managed to detect. UtteranceTimestamp – The date and time of the utterance.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Name22>))]
public sealed record Name22 : OpenStringEnum<Name22>
{
    private Name22(string value) : base(value)
    {
    }

    public static readonly Name22 Count = new("Count");

    public static readonly Name22 Missed = new("Missed");

    public static readonly Name22 Detected = new("Detected");

    public static readonly Name22 UtteranceTimestamp = new("UtteranceTimestamp");

    public TResult Match<TResult>(Func<TResult> onCount,
        Func<TResult> onMissed,
        Func<TResult> onDetected,
        Func<TResult> onUtteranceTimestamp,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Count => onCount(),
            _ when this == Missed => onMissed(),
            _ when this == Detected => onDetected(),
            _ when this == UtteranceTimestamp => onUtteranceTimestamp(),
            _ => otherwise(Value)
        };

    public void Match(Action onCount,
        Action onMissed,
        Action onDetected,
        Action onUtteranceTimestamp,
        Action<string> otherwise)
    {
        if (this == Count) onCount();
        else if (this == Missed) onMissed();
        else if (this == Detected) onDetected();
        else if (this == UtteranceTimestamp) onUtteranceTimestamp();
        else otherwise(Value);
    }
}
