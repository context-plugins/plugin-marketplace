using System;
using System.Text.Json.Serialization;
using CircleCi.Core.Enum;

namespace CircleCi.Models.Enums;

/// <summary>
/// The current status of the workflow
/// </summary>
[JsonConverter(typeof(StringEnumConverter<StatusCircleCiRestApiV2PipelineApi>))]
public sealed record StatusCircleCiRestApiV2PipelineApi : OpenStringEnum<StatusCircleCiRestApiV2PipelineApi>
{
    private StatusCircleCiRestApiV2PipelineApi(string value) : base(value)
    {
    }

    public static readonly StatusCircleCiRestApiV2PipelineApi Success = new("success");

    public static readonly StatusCircleCiRestApiV2PipelineApi Running = new("running");

    public static readonly StatusCircleCiRestApiV2PipelineApi NotRun = new("not_run");

    public static readonly StatusCircleCiRestApiV2PipelineApi Failed = new("failed");

    public static readonly StatusCircleCiRestApiV2PipelineApi Error = new("error");

    public static readonly StatusCircleCiRestApiV2PipelineApi Failing = new("failing");

    public static readonly StatusCircleCiRestApiV2PipelineApi OnHold = new("on_hold");

    public static readonly StatusCircleCiRestApiV2PipelineApi Canceled = new("canceled");

    public static readonly StatusCircleCiRestApiV2PipelineApi Unauthorized = new("unauthorized");

    public TResult Match<TResult>(Func<TResult> onSuccess,
        Func<TResult> onRunning,
        Func<TResult> onNotRun,
        Func<TResult> onFailed,
        Func<TResult> onError,
        Func<TResult> onFailing,
        Func<TResult> onOnHold,
        Func<TResult> onCanceled,
        Func<TResult> onUnauthorized,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Success => onSuccess(),
            _ when this == Running => onRunning(),
            _ when this == NotRun => onNotRun(),
            _ when this == Failed => onFailed(),
            _ when this == Error => onError(),
            _ when this == Failing => onFailing(),
            _ when this == OnHold => onOnHold(),
            _ when this == Canceled => onCanceled(),
            _ when this == Unauthorized => onUnauthorized(),
            _ => otherwise(Value)
        };

    public void Match(Action onSuccess,
        Action onRunning,
        Action onNotRun,
        Action onFailed,
        Action onError,
        Action onFailing,
        Action onOnHold,
        Action onCanceled,
        Action onUnauthorized,
        Action<string> otherwise)
    {
        if (this == Success) onSuccess();
        else if (this == Running) onRunning();
        else if (this == NotRun) onNotRun();
        else if (this == Failed) onFailed();
        else if (this == Error) onError();
        else if (this == Failing) onFailing();
        else if (this == OnHold) onOnHold();
        else if (this == Canceled) onCanceled();
        else if (this == Unauthorized) onUnauthorized();
        else otherwise(Value);
    }
}
