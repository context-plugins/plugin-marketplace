using System;
using System.Text.Json.Serialization;
using RocketReach.Core.Enum;

namespace RocketReach.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<OrderByEnum>))]
public sealed record OrderByEnum : OpenStringEnum<OrderByEnum>
{
    private OrderByEnum(string value) : base(value)
    {
    }

    public static readonly OrderByEnum Relevance = new("relevance");

    public static readonly OrderByEnum Popularity = new("popularity");

    public static readonly OrderByEnum Score = new("score");

    public TResult Match<TResult>(Func<TResult> onRelevance,
        Func<TResult> onPopularity,
        Func<TResult> onScore,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Relevance => onRelevance(),
            _ when this == Popularity => onPopularity(),
            _ when this == Score => onScore(),
            _ => otherwise(Value)
        };

    public void Match(Action onRelevance, Action onPopularity, Action onScore, Action<string> otherwise)
    {
        if (this == Relevance) onRelevance();
        else if (this == Popularity) onPopularity();
        else if (this == Score) onScore();
        else otherwise(Value);
    }
}
