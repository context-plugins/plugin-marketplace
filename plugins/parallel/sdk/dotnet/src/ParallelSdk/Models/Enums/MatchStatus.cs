using System;
using System.Text.Json.Serialization;
using ParallelSdk.Core.Enum;

namespace ParallelSdk.Models.Enums;

/// <summary>
/// Status of the candidate. One of generated, matched, unmatched, discarded.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<MatchStatus>))]
public sealed record MatchStatus : OpenStringEnum<MatchStatus>
{
    private MatchStatus(string value) : base(value)
    {
    }

    public static readonly MatchStatus Generated = new("generated");

    public static readonly MatchStatus Matched = new("matched");

    public static readonly MatchStatus Unmatched = new("unmatched");

    public static readonly MatchStatus Discarded = new("discarded");

    public TResult Match<TResult>(Func<TResult> onGenerated,
        Func<TResult> onMatched,
        Func<TResult> onUnmatched,
        Func<TResult> onDiscarded,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Generated => onGenerated(),
            _ when this == Matched => onMatched(),
            _ when this == Unmatched => onUnmatched(),
            _ when this == Discarded => onDiscarded(),
            _ => otherwise(Value)
        };

    public void Match(Action onGenerated,
        Action onMatched,
        Action onUnmatched,
        Action onDiscarded,
        Action<string> otherwise)
    {
        if (this == Generated) onGenerated();
        else if (this == Matched) onMatched();
        else if (this == Unmatched) onUnmatched();
        else if (this == Discarded) onDiscarded();
        else otherwise(Value);
    }
}
