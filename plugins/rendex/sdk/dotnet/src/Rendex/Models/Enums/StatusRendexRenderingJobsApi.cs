using System;
using System.Text.Json.Serialization;
using Rendex.Core.Enum;

namespace Rendex.Models.Enums;

/// <summary>
/// Overall batch status
/// </summary>
[JsonConverter(typeof(StringEnumConverter<StatusRendexRenderingJobsApi>))]
public sealed record StatusRendexRenderingJobsApi : OpenStringEnum<StatusRendexRenderingJobsApi>
{
    private StatusRendexRenderingJobsApi(string value) : base(value)
    {
    }

    public static readonly StatusRendexRenderingJobsApi Processing = new("processing");

    public static readonly StatusRendexRenderingJobsApi Completed = new("completed");

    public static readonly StatusRendexRenderingJobsApi Failed = new("failed");

    public TResult Match<TResult>(Func<TResult> onProcessing,
        Func<TResult> onCompleted,
        Func<TResult> onFailed,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Processing => onProcessing(),
            _ when this == Completed => onCompleted(),
            _ when this == Failed => onFailed(),
            _ => otherwise(Value)
        };

    public void Match(Action onProcessing, Action onCompleted, Action onFailed, Action<string> otherwise)
    {
        if (this == Processing) onProcessing();
        else if (this == Completed) onCompleted();
        else if (this == Failed) onFailed();
        else otherwise(Value);
    }
}
