using System;
using System.Text.Json.Serialization;
using FinixApiReference.Core.Enum;

namespace FinixApiReference.Models.Enums;

/// <summary>
/// The result after uploading evidence.
/// - <c>PENDING</c>: The evidence file has not yet been validated. No user action is required.
/// - <c>SUCCEEDED</c>: The evidence file has passed validation and can be submitted to the card networks.
/// - <c>CANCELED</c>: The evidence file upload was not completed due to user action.
/// - <c>FAILED</c>: The evidence file could not be processed. Check <c>failure_code</c> for the specific reason and <c>failure_message</c> for a user-safe description of the issue.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<State5>))]
public sealed record State5 : OpenStringEnum<State5>
{
    private State5(string value) : base(value)
    {
    }

    public static readonly State5 Pending = new("PENDING");

    public static readonly State5 Succeeded = new("SUCCEEDED");

    public static readonly State5 Canceled = new("CANCELED");

    public static readonly State5 Failed = new("FAILED");

    public TResult Match<TResult>(Func<TResult> onPending,
        Func<TResult> onSucceeded,
        Func<TResult> onCanceled,
        Func<TResult> onFailed,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Pending => onPending(),
            _ when this == Succeeded => onSucceeded(),
            _ when this == Canceled => onCanceled(),
            _ when this == Failed => onFailed(),
            _ => otherwise(Value)
        };

    public void Match(Action onPending,
        Action onSucceeded,
        Action onCanceled,
        Action onFailed,
        Action<string> otherwise)
    {
        if (this == Pending) onPending();
        else if (this == Succeeded) onSucceeded();
        else if (this == Canceled) onCanceled();
        else if (this == Failed) onFailed();
        else otherwise(Value);
    }
}
