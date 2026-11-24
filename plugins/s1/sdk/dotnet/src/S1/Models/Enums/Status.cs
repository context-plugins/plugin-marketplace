using System;
using System.Text.Json.Serialization;
using S1.Core.Enum;

namespace S1.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Status>))]
public sealed record Status : OpenStringEnum<Status>
{
    private Status(string value) : base(value)
    {
    }

    public static readonly Status Queued = new("queued");

    public static readonly Status Waiting = new("waiting");

    public static readonly Status Processing = new("processing");

    public static readonly Status Completed = new("completed");

    public static readonly Status Failed = new("failed");

    public static readonly Status NotFound = new("not_found");

    public TResult Match<TResult>(Func<TResult> onQueued,
        Func<TResult> onWaiting,
        Func<TResult> onProcessing,
        Func<TResult> onCompleted,
        Func<TResult> onFailed,
        Func<TResult> onNotFound,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Queued => onQueued(),
            _ when this == Waiting => onWaiting(),
            _ when this == Processing => onProcessing(),
            _ when this == Completed => onCompleted(),
            _ when this == Failed => onFailed(),
            _ when this == NotFound => onNotFound(),
            _ => otherwise(Value)
        };

    public void Match(Action onQueued,
        Action onWaiting,
        Action onProcessing,
        Action onCompleted,
        Action onFailed,
        Action onNotFound,
        Action<string> otherwise)
    {
        if (this == Queued) onQueued();
        else if (this == Waiting) onWaiting();
        else if (this == Processing) onProcessing();
        else if (this == Completed) onCompleted();
        else if (this == Failed) onFailed();
        else if (this == NotFound) onNotFound();
        else otherwise(Value);
    }
}
