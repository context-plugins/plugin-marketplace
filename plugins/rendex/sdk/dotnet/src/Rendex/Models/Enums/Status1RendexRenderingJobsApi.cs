using System;
using System.Text.Json.Serialization;
using Rendex.Core.Enum;

namespace Rendex.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Status1RendexRenderingJobsApi>))]
public sealed record Status1RendexRenderingJobsApi : OpenStringEnum<Status1RendexRenderingJobsApi>
{
    private Status1RendexRenderingJobsApi(string value) : base(value)
    {
    }

    public static readonly Status1RendexRenderingJobsApi Queued = new("queued");

    public static readonly Status1RendexRenderingJobsApi Processing = new("processing");

    public static readonly Status1RendexRenderingJobsApi Completed = new("completed");

    public static readonly Status1RendexRenderingJobsApi Failed = new("failed");

    public TResult Match<TResult>(Func<TResult> onQueued,
        Func<TResult> onProcessing,
        Func<TResult> onCompleted,
        Func<TResult> onFailed,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Queued => onQueued(),
            _ when this == Processing => onProcessing(),
            _ when this == Completed => onCompleted(),
            _ when this == Failed => onFailed(),
            _ => otherwise(Value)
        };

    public void Match(Action onQueued,
        Action onProcessing,
        Action onCompleted,
        Action onFailed,
        Action<string> otherwise)
    {
        if (this == Queued) onQueued();
        else if (this == Processing) onProcessing();
        else if (this == Completed) onCompleted();
        else if (this == Failed) onFailed();
        else otherwise(Value);
    }
}
