using System;
using System.Text.Json.Serialization;
using Perigon.Core.Enum;

namespace Perigon.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<SortBy>))]
public sealed record SortBy : OpenStringEnum<SortBy>
{
    private SortBy(string value) : base(value)
    {
    }

    public static readonly SortBy CreatedAt = new("createdAt");

    public static readonly SortBy TriggeredAt = new("triggeredAt");

    public TResult Match<TResult>(Func<TResult> onCreatedAt,
        Func<TResult> onTriggeredAt,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == CreatedAt => onCreatedAt(),
            _ when this == TriggeredAt => onTriggeredAt(),
            _ => otherwise(Value)
        };

    public void Match(Action onCreatedAt, Action onTriggeredAt, Action<string> otherwise)
    {
        if (this == CreatedAt) onCreatedAt();
        else if (this == TriggeredAt) onTriggeredAt();
        else otherwise(Value);
    }
}
