using System;
using System.Text.Json.Serialization;
using Hightouch.Core.Enum;

namespace Hightouch.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<OrderBy1>))]
public sealed record OrderBy1 : OpenStringEnum<OrderBy1>
{
    private OrderBy1(string value) : base(value)
    {
    }

    public static readonly OrderBy1 Id = new("id");

    public static readonly OrderBy1 CreatedAt = new("createdAt");

    public static readonly OrderBy1 StartedAt = new("startedAt");

    public static readonly OrderBy1 FinishedAt = new("finishedAt");

    public TResult Match<TResult>(Func<TResult> onId,
        Func<TResult> onCreatedAt,
        Func<TResult> onStartedAt,
        Func<TResult> onFinishedAt,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Id => onId(),
            _ when this == CreatedAt => onCreatedAt(),
            _ when this == StartedAt => onStartedAt(),
            _ when this == FinishedAt => onFinishedAt(),
            _ => otherwise(Value)
        };

    public void Match(Action onId,
        Action onCreatedAt,
        Action onStartedAt,
        Action onFinishedAt,
        Action<string> otherwise)
    {
        if (this == Id) onId();
        else if (this == CreatedAt) onCreatedAt();
        else if (this == StartedAt) onStartedAt();
        else if (this == FinishedAt) onFinishedAt();
        else otherwise(Value);
    }
}
