using System;
using System.Text.Json.Serialization;
using Perigon.Core.Enum;

namespace Perigon.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<ClustersListSortBy>))]
public sealed record ClustersListSortBy : OpenStringEnum<ClustersListSortBy>
{
    private ClustersListSortBy(string value) : base(value)
    {
    }

    public static readonly ClustersListSortBy CreatedAt = new("createdAt");

    public static readonly ClustersListSortBy UpdatedAt = new("updatedAt");

    public static readonly ClustersListSortBy Relevance = new("relevance");

    public static readonly ClustersListSortBy Count = new("count");

    public static readonly ClustersListSortBy TotalCount = new("totalCount");

    public TResult Match<TResult>(Func<TResult> onCreatedAt,
        Func<TResult> onUpdatedAt,
        Func<TResult> onRelevance,
        Func<TResult> onCount,
        Func<TResult> onTotalCount,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == CreatedAt => onCreatedAt(),
            _ when this == UpdatedAt => onUpdatedAt(),
            _ when this == Relevance => onRelevance(),
            _ when this == Count => onCount(),
            _ when this == TotalCount => onTotalCount(),
            _ => otherwise(Value)
        };

    public void Match(Action onCreatedAt,
        Action onUpdatedAt,
        Action onRelevance,
        Action onCount,
        Action onTotalCount,
        Action<string> otherwise)
    {
        if (this == CreatedAt) onCreatedAt();
        else if (this == UpdatedAt) onUpdatedAt();
        else if (this == Relevance) onRelevance();
        else if (this == Count) onCount();
        else if (this == TotalCount) onTotalCount();
        else otherwise(Value);
    }
}
