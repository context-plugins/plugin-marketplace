using System;
using System.Text.Json.Serialization;
using Hightouch.Core.Enum;

namespace Hightouch.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<OrderByHightouchEventsApi>))]
public sealed record OrderByHightouchEventsApi : OpenStringEnum<OrderByHightouchEventsApi>
{
    private OrderByHightouchEventsApi(string value) : base(value)
    {
    }

    public static readonly OrderByHightouchEventsApi Id = new("id");

    public static readonly OrderByHightouchEventsApi Name = new("name");

    public static readonly OrderByHightouchEventsApi CreatedAt = new("createdAt");

    public static readonly OrderByHightouchEventsApi UpdatedAt = new("updatedAt");

    public TResult Match<TResult>(Func<TResult> onId,
        Func<TResult> onName,
        Func<TResult> onCreatedAt,
        Func<TResult> onUpdatedAt,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Id => onId(),
            _ when this == Name => onName(),
            _ when this == CreatedAt => onCreatedAt(),
            _ when this == UpdatedAt => onUpdatedAt(),
            _ => otherwise(Value)
        };

    public void Match(Action onId, Action onName, Action onCreatedAt, Action onUpdatedAt, Action<string> otherwise)
    {
        if (this == Id) onId();
        else if (this == Name) onName();
        else if (this == CreatedAt) onCreatedAt();
        else if (this == UpdatedAt) onUpdatedAt();
        else otherwise(Value);
    }
}
