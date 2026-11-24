using System;
using System.Text.Json.Serialization;
using ParallelSdk.Core.Enum;

namespace ParallelSdk.Models.Enums;

/// <summary>
/// Event type; one of findall.candidate.generated, findall.candidate.matched, findall.candidate.unmatched, findall.candidate.discarded, findall.candidate.enriched.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Type2>))]
public sealed record Type2 : OpenStringEnum<Type2>
{
    private Type2(string value) : base(value)
    {
    }

    public static readonly Type2 FindallCandidateGenerated = new("findall.candidate.generated");

    public static readonly Type2 FindallCandidateMatched = new("findall.candidate.matched");

    public static readonly Type2 FindallCandidateUnmatched = new("findall.candidate.unmatched");

    public static readonly Type2 FindallCandidateDiscarded = new("findall.candidate.discarded");

    public static readonly Type2 FindallCandidateEnriched = new("findall.candidate.enriched");

    public TResult Match<TResult>(Func<TResult> onFindallCandidateGenerated,
        Func<TResult> onFindallCandidateMatched,
        Func<TResult> onFindallCandidateUnmatched,
        Func<TResult> onFindallCandidateDiscarded,
        Func<TResult> onFindallCandidateEnriched,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == FindallCandidateGenerated => onFindallCandidateGenerated(),
            _ when this == FindallCandidateMatched => onFindallCandidateMatched(),
            _ when this == FindallCandidateUnmatched => onFindallCandidateUnmatched(),
            _ when this == FindallCandidateDiscarded => onFindallCandidateDiscarded(),
            _ when this == FindallCandidateEnriched => onFindallCandidateEnriched(),
            _ => otherwise(Value)
        };

    public void Match(Action onFindallCandidateGenerated,
        Action onFindallCandidateMatched,
        Action onFindallCandidateUnmatched,
        Action onFindallCandidateDiscarded,
        Action onFindallCandidateEnriched,
        Action<string> otherwise)
    {
        if (this == FindallCandidateGenerated) onFindallCandidateGenerated();
        else if (this == FindallCandidateMatched) onFindallCandidateMatched();
        else if (this == FindallCandidateUnmatched) onFindallCandidateUnmatched();
        else if (this == FindallCandidateDiscarded) onFindallCandidateDiscarded();
        else if (this == FindallCandidateEnriched) onFindallCandidateEnriched();
        else otherwise(Value);
    }
}
