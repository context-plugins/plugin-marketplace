using System;
using System.Text.Json.Serialization;
using AmazonLex.Core.Enum;

namespace AmazonLex.Models.Enums;

/// <summary>
/// To return utterances that were recognized and handled, use Detected. To return utterances that were not recognized, use Missed.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<StatusType>))]
public sealed record StatusType : OpenStringEnum<StatusType>
{
    private StatusType(string value) : base(value)
    {
    }

    public static readonly StatusType Detected = new("Detected");

    public static readonly StatusType Missed = new("Missed");

    public TResult Match<TResult>(Func<TResult> onDetected, Func<TResult> onMissed, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Detected => onDetected(),
            _ when this == Missed => onMissed(),
            _ => otherwise(Value)
        };

    public void Match(Action onDetected, Action onMissed, Action<string> otherwise)
    {
        if (this == Detected) onDetected();
        else if (this == Missed) onMissed();
        else otherwise(Value);
    }
}
