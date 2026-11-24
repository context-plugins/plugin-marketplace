using System;
using System.Text.Json.Serialization;
using Basiq.Core.Enum;

namespace Basiq.Models.Enums;

/// <summary>
/// Status of the job step
/// </summary>
[JsonConverter(typeof(StringEnumConverter<StatusConnectJobsApi>))]
public sealed record StatusConnectJobsApi : OpenStringEnum<StatusConnectJobsApi>
{
    private StatusConnectJobsApi(string value) : base(value)
    {
    }

    public static readonly StatusConnectJobsApi Pending = new("pending");

    public static readonly StatusConnectJobsApi InProgress = new("in-progress");

    public static readonly StatusConnectJobsApi Success = new("success");

    public static readonly StatusConnectJobsApi Failed = new("failed");

    public TResult Match<TResult>(Func<TResult> onPending,
        Func<TResult> onInProgress,
        Func<TResult> onSuccess,
        Func<TResult> onFailed,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Pending => onPending(),
            _ when this == InProgress => onInProgress(),
            _ when this == Success => onSuccess(),
            _ when this == Failed => onFailed(),
            _ => otherwise(Value)
        };

    public void Match(Action onPending,
        Action onInProgress,
        Action onSuccess,
        Action onFailed,
        Action<string> otherwise)
    {
        if (this == Pending) onPending();
        else if (this == InProgress) onInProgress();
        else if (this == Success) onSuccess();
        else if (this == Failed) onFailed();
        else otherwise(Value);
    }
}
