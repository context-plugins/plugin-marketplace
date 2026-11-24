using System;
using System.Text.Json.Serialization;
using Hightouch.Core.Enum;

namespace Hightouch.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<OrderByHightouchIdrApi>))]
public sealed record OrderByHightouchIdrApi : OpenStringEnum<OrderByHightouchIdrApi>
{
    private OrderByHightouchIdrApi(string value) : base(value)
    {
    }

    public static readonly OrderByHightouchIdrApi CreatedAt = new("created_at");

    public static readonly OrderByHightouchIdrApi StartedAt = new("started_at");

    public static readonly OrderByHightouchIdrApi FinishedAt = new("finished_at");

    public TResult Match<TResult>(Func<TResult> onCreatedAt,
        Func<TResult> onStartedAt,
        Func<TResult> onFinishedAt,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == CreatedAt => onCreatedAt(),
            _ when this == StartedAt => onStartedAt(),
            _ when this == FinishedAt => onFinishedAt(),
            _ => otherwise(Value)
        };

    public void Match(Action onCreatedAt, Action onStartedAt, Action onFinishedAt, Action<string> otherwise)
    {
        if (this == CreatedAt) onCreatedAt();
        else if (this == StartedAt) onStartedAt();
        else if (this == FinishedAt) onFinishedAt();
        else otherwise(Value);
    }
}
