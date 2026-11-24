using System;
using System.Text.Json.Serialization;
using Perigon.Core.Enum;

namespace Perigon.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<AllEndpointSortBy>))]
public sealed record AllEndpointSortBy : OpenStringEnum<AllEndpointSortBy>
{
    private AllEndpointSortBy(string value) : base(value)
    {
    }

    public static readonly AllEndpointSortBy Relevance = new("relevance");

    public static readonly AllEndpointSortBy Date = new("date");

    public static readonly AllEndpointSortBy ReverseDate = new("reverseDate");

    public static readonly AllEndpointSortBy ReverseAddDate = new("reverseAddDate");

    public static readonly AllEndpointSortBy AddDate = new("addDate");

    public static readonly AllEndpointSortBy PubDate = new("pubDate");

    public static readonly AllEndpointSortBy RefreshDate = new("refreshDate");

    public TResult Match<TResult>(Func<TResult> onRelevance,
        Func<TResult> onDate,
        Func<TResult> onReverseDate,
        Func<TResult> onReverseAddDate,
        Func<TResult> onAddDate,
        Func<TResult> onPubDate,
        Func<TResult> onRefreshDate,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Relevance => onRelevance(),
            _ when this == Date => onDate(),
            _ when this == ReverseDate => onReverseDate(),
            _ when this == ReverseAddDate => onReverseAddDate(),
            _ when this == AddDate => onAddDate(),
            _ when this == PubDate => onPubDate(),
            _ when this == RefreshDate => onRefreshDate(),
            _ => otherwise(Value)
        };

    public void Match(Action onRelevance,
        Action onDate,
        Action onReverseDate,
        Action onReverseAddDate,
        Action onAddDate,
        Action onPubDate,
        Action onRefreshDate,
        Action<string> otherwise)
    {
        if (this == Relevance) onRelevance();
        else if (this == Date) onDate();
        else if (this == ReverseDate) onReverseDate();
        else if (this == ReverseAddDate) onReverseAddDate();
        else if (this == AddDate) onAddDate();
        else if (this == PubDate) onPubDate();
        else if (this == RefreshDate) onRefreshDate();
        else otherwise(Value);
    }
}
