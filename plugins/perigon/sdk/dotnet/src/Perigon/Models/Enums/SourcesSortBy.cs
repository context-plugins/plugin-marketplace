using System;
using System.Text.Json.Serialization;
using Perigon.Core.Enum;

namespace Perigon.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<SourcesSortBy>))]
public sealed record SourcesSortBy : OpenStringEnum<SourcesSortBy>
{
    private SourcesSortBy(string value) : base(value)
    {
    }

    public static readonly SourcesSortBy GlobalRank = new("globalRank");

    public static readonly SourcesSortBy Relevance = new("relevance");

    public static readonly SourcesSortBy MonthlyVisits = new("monthlyVisits");

    public static readonly SourcesSortBy AvgMonthlyPosts = new("avgMonthlyPosts");

    public TResult Match<TResult>(Func<TResult> onGlobalRank,
        Func<TResult> onRelevance,
        Func<TResult> onMonthlyVisits,
        Func<TResult> onAvgMonthlyPosts,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == GlobalRank => onGlobalRank(),
            _ when this == Relevance => onRelevance(),
            _ when this == MonthlyVisits => onMonthlyVisits(),
            _ when this == AvgMonthlyPosts => onAvgMonthlyPosts(),
            _ => otherwise(Value)
        };

    public void Match(Action onGlobalRank,
        Action onRelevance,
        Action onMonthlyVisits,
        Action onAvgMonthlyPosts,
        Action<string> otherwise)
    {
        if (this == GlobalRank) onGlobalRank();
        else if (this == Relevance) onRelevance();
        else if (this == MonthlyVisits) onMonthlyVisits();
        else if (this == AvgMonthlyPosts) onAvgMonthlyPosts();
        else otherwise(Value);
    }
}
