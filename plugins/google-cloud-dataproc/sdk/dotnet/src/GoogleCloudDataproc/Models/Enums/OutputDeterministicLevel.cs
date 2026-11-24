using System;
using System.Text.Json.Serialization;
using GoogleCloudDataproc.Core.Enum;

namespace GoogleCloudDataproc.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<OutputDeterministicLevel>))]
public sealed record OutputDeterministicLevel : OpenStringEnum<OutputDeterministicLevel>
{
    private OutputDeterministicLevel(string value) : base(value)
    {
    }

    public static readonly OutputDeterministicLevel DeterministicLevelUnspecified = new(
        "DETERMINISTIC_LEVEL_UNSPECIFIED");

    public static readonly OutputDeterministicLevel DeterministicLevelDeterminate = new(
        "DETERMINISTIC_LEVEL_DETERMINATE");

    public static readonly OutputDeterministicLevel DeterministicLevelUnordered = new("DETERMINISTIC_LEVEL_UNORDERED");

    public static readonly OutputDeterministicLevel DeterministicLevelIndeterminate = new(
        "DETERMINISTIC_LEVEL_INDETERMINATE");

    public TResult Match<TResult>(Func<TResult> onDeterministicLevelUnspecified,
        Func<TResult> onDeterministicLevelDeterminate,
        Func<TResult> onDeterministicLevelUnordered,
        Func<TResult> onDeterministicLevelIndeterminate,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == DeterministicLevelUnspecified => onDeterministicLevelUnspecified(),
            _ when this == DeterministicLevelDeterminate => onDeterministicLevelDeterminate(),
            _ when this == DeterministicLevelUnordered => onDeterministicLevelUnordered(),
            _ when this == DeterministicLevelIndeterminate => onDeterministicLevelIndeterminate(),
            _ => otherwise(Value)
        };

    public void Match(Action onDeterministicLevelUnspecified,
        Action onDeterministicLevelDeterminate,
        Action onDeterministicLevelUnordered,
        Action onDeterministicLevelIndeterminate,
        Action<string> otherwise)
    {
        if (this == DeterministicLevelUnspecified) onDeterministicLevelUnspecified();
        else if (this == DeterministicLevelDeterminate) onDeterministicLevelDeterminate();
        else if (this == DeterministicLevelUnordered) onDeterministicLevelUnordered();
        else if (this == DeterministicLevelIndeterminate) onDeterministicLevelIndeterminate();
        else otherwise(Value);
    }
}
