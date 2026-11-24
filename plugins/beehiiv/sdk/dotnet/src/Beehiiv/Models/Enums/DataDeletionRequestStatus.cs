using System;
using System.Text.Json.Serialization;
using Beehiiv.Core.Enum;

namespace Beehiiv.Models.Enums;

/// <summary>
/// The current status of the data deletion request.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<DataDeletionRequestStatus>))]
public sealed record DataDeletionRequestStatus : OpenStringEnum<DataDeletionRequestStatus>
{
    private DataDeletionRequestStatus(string value) : base(value)
    {
    }

    public static readonly DataDeletionRequestStatus Pending = new("pending");

    public static readonly DataDeletionRequestStatus Processing = new("processing");

    public static readonly DataDeletionRequestStatus Completed = new("completed");

    public static readonly DataDeletionRequestStatus Failed = new("failed");

    public static readonly DataDeletionRequestStatus Canceled = new("canceled");

    public TResult Match<TResult>(Func<TResult> onPending,
        Func<TResult> onProcessing,
        Func<TResult> onCompleted,
        Func<TResult> onFailed,
        Func<TResult> onCanceled,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Pending => onPending(),
            _ when this == Processing => onProcessing(),
            _ when this == Completed => onCompleted(),
            _ when this == Failed => onFailed(),
            _ when this == Canceled => onCanceled(),
            _ => otherwise(Value)
        };

    public void Match(Action onPending,
        Action onProcessing,
        Action onCompleted,
        Action onFailed,
        Action onCanceled,
        Action<string> otherwise)
    {
        if (this == Pending) onPending();
        else if (this == Processing) onProcessing();
        else if (this == Completed) onCompleted();
        else if (this == Failed) onFailed();
        else if (this == Canceled) onCanceled();
        else otherwise(Value);
    }
}
