using System;
using System.Text.Json.Serialization;
using DevCycle.Core.Enum;

namespace DevCycle.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<SortBy>))]
public sealed record SortBy : OpenStringEnum<SortBy>
{
    private SortBy(string value) : base(value)
    {
    }

    public static readonly SortBy CreatedAt = new("createdAt");

    public static readonly SortBy UpdatedAt = new("updatedAt");

    public static readonly SortBy Name = new("name");

    public static readonly SortBy Key = new("key");

    public static readonly SortBy PropertyKey = new("propertyKey");

    public TResult Match<TResult>(Func<TResult> onCreatedAt,
        Func<TResult> onUpdatedAt,
        Func<TResult> onName,
        Func<TResult> onKey,
        Func<TResult> onPropertyKey,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == CreatedAt => onCreatedAt(),
            _ when this == UpdatedAt => onUpdatedAt(),
            _ when this == Name => onName(),
            _ when this == Key => onKey(),
            _ when this == PropertyKey => onPropertyKey(),
            _ => otherwise(Value)
        };

    public void Match(Action onCreatedAt,
        Action onUpdatedAt,
        Action onName,
        Action onKey,
        Action onPropertyKey,
        Action<string> otherwise)
    {
        if (this == CreatedAt) onCreatedAt();
        else if (this == UpdatedAt) onUpdatedAt();
        else if (this == Name) onName();
        else if (this == Key) onKey();
        else if (this == PropertyKey) onPropertyKey();
        else otherwise(Value);
    }
}
