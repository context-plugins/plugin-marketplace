using System;
using System.Text.Json.Serialization;
using Perigon.Core.Enum;

namespace Perigon.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<WatchlistSortBy>))]
public sealed record WatchlistSortBy : OpenStringEnum<WatchlistSortBy>
{
    private WatchlistSortBy(string value) : base(value)
    {
    }

    public static readonly WatchlistSortBy Id = new("id");

    public static readonly WatchlistSortBy CreatedAt = new("createdAt");

    public static readonly WatchlistSortBy UpdatedAt = new("updatedAt");

    public static readonly WatchlistSortBy Name = new("name");

    public TResult Match<TResult>(Func<TResult> onId,
        Func<TResult> onCreatedAt,
        Func<TResult> onUpdatedAt,
        Func<TResult> onName,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Id => onId(),
            _ when this == CreatedAt => onCreatedAt(),
            _ when this == UpdatedAt => onUpdatedAt(),
            _ when this == Name => onName(),
            _ => otherwise(Value)
        };

    public void Match(Action onId, Action onCreatedAt, Action onUpdatedAt, Action onName, Action<string> otherwise)
    {
        if (this == Id) onId();
        else if (this == CreatedAt) onCreatedAt();
        else if (this == UpdatedAt) onUpdatedAt();
        else if (this == Name) onName();
        else otherwise(Value);
    }
}
