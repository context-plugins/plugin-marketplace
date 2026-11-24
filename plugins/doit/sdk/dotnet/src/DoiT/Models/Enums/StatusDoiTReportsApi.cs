using System;
using System.Text.Json.Serialization;
using DoiT.Core.Enum;

namespace DoiT.Models.Enums;

/// <summary>
/// Current lifecycle status of the operation.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<StatusDoiTReportsApi>))]
public sealed record StatusDoiTReportsApi : OpenStringEnum<StatusDoiTReportsApi>
{
    private StatusDoiTReportsApi(string value) : base(value)
    {
    }

    public static readonly StatusDoiTReportsApi Pending = new("pending");

    public static readonly StatusDoiTReportsApi Running = new("running");

    public static readonly StatusDoiTReportsApi Succeeded = new("succeeded");

    public static readonly StatusDoiTReportsApi Failed = new("failed");

    public static readonly StatusDoiTReportsApi Canceled = new("canceled");

    public TResult Match<TResult>(Func<TResult> onPending,
        Func<TResult> onRunning,
        Func<TResult> onSucceeded,
        Func<TResult> onFailed,
        Func<TResult> onCanceled,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Pending => onPending(),
            _ when this == Running => onRunning(),
            _ when this == Succeeded => onSucceeded(),
            _ when this == Failed => onFailed(),
            _ when this == Canceled => onCanceled(),
            _ => otherwise(Value)
        };

    public void Match(Action onPending,
        Action onRunning,
        Action onSucceeded,
        Action onFailed,
        Action onCanceled,
        Action<string> otherwise)
    {
        if (this == Pending) onPending();
        else if (this == Running) onRunning();
        else if (this == Succeeded) onSucceeded();
        else if (this == Failed) onFailed();
        else if (this == Canceled) onCanceled();
        else otherwise(Value);
    }
}
