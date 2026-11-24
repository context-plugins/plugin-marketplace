using System;
using System.Text.Json.Serialization;
using Surfe.Core.Enum;

namespace Surfe.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<JobStatus>))]
public sealed record JobStatus : OpenStringEnum<JobStatus>
{
    private JobStatus(string value) : base(value)
    {
    }

    public static readonly JobStatus Pending = new("PENDING");

    public static readonly JobStatus InProgress = new("IN_PROGRESS");

    public static readonly JobStatus Completed = new("COMPLETED");

    public static readonly JobStatus Failed = new("FAILED");

    public TResult Match<TResult>(Func<TResult> onPending,
        Func<TResult> onInProgress,
        Func<TResult> onCompleted,
        Func<TResult> onFailed,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Pending => onPending(),
            _ when this == InProgress => onInProgress(),
            _ when this == Completed => onCompleted(),
            _ when this == Failed => onFailed(),
            _ => otherwise(Value)
        };

    public void Match(Action onPending,
        Action onInProgress,
        Action onCompleted,
        Action onFailed,
        Action<string> otherwise)
    {
        if (this == Pending) onPending();
        else if (this == InProgress) onInProgress();
        else if (this == Completed) onCompleted();
        else if (this == Failed) onFailed();
        else otherwise(Value);
    }
}
