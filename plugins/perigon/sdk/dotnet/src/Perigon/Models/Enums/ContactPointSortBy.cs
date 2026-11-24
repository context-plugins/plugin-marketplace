using System;
using System.Text.Json.Serialization;
using Perigon.Core.Enum;

namespace Perigon.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<ContactPointSortBy>))]
public sealed record ContactPointSortBy : OpenStringEnum<ContactPointSortBy>
{
    private ContactPointSortBy(string value) : base(value)
    {
    }

    public static readonly ContactPointSortBy CreatedAt = new("createdAt");

    public static readonly ContactPointSortBy UpdatedAt = new("updatedAt");

    public TResult Match<TResult>(Func<TResult> onCreatedAt,
        Func<TResult> onUpdatedAt,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == CreatedAt => onCreatedAt(),
            _ when this == UpdatedAt => onUpdatedAt(),
            _ => otherwise(Value)
        };

    public void Match(Action onCreatedAt, Action onUpdatedAt, Action<string> otherwise)
    {
        if (this == CreatedAt) onCreatedAt();
        else if (this == UpdatedAt) onUpdatedAt();
        else otherwise(Value);
    }
}
