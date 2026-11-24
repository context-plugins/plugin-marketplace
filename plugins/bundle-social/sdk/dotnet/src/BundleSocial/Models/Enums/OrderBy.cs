using System;
using System.Text.Json.Serialization;
using BundleSocial.Core.Enum;

namespace BundleSocial.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<OrderBy>))]
public sealed record OrderBy : OpenStringEnum<OrderBy>
{
    private OrderBy(string value) : base(value)
    {
    }

    public static readonly OrderBy CreatedAt = new("createdAt");

    public static readonly OrderBy UpdatedAt = new("updatedAt");

    public static readonly OrderBy DeletedAt = new("deletedAt");

    public TResult Match<TResult>(Func<TResult> onCreatedAt,
        Func<TResult> onUpdatedAt,
        Func<TResult> onDeletedAt,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == CreatedAt => onCreatedAt(),
            _ when this == UpdatedAt => onUpdatedAt(),
            _ when this == DeletedAt => onDeletedAt(),
            _ => otherwise(Value)
        };

    public void Match(Action onCreatedAt, Action onUpdatedAt, Action onDeletedAt, Action<string> otherwise)
    {
        if (this == CreatedAt) onCreatedAt();
        else if (this == UpdatedAt) onUpdatedAt();
        else if (this == DeletedAt) onDeletedAt();
        else otherwise(Value);
    }
}
