using System;
using System.Text.Json.Serialization;
using FinixApiReference.Core.Enum;

namespace FinixApiReference.Models.Enums;

/// <summary>
/// The state of the authentication process. A <c>state</c> of <c>SUCCEEDED</c> means the process finished. It does not mean the buyer was authenticated: a session where the issuer declined to authenticate the buyer also ends in <c>SUCCEEDED</c>. Read <c>3d_secure_authentication.electronic_commerce_indicator</c> for the authentication result.
/// <list type="bullet">
///   <item><description><c>PENDING</c>: The authentication process has not finished.</description></item>
///   <item><description><c>SUCCEEDED</c>: The authentication process finished and returned a result.</description></item>
///   <item><description><c>FAILED</c>: The authentication process could not finish. See <c>failure_code</c> and <c>failure_message</c>.</description></item>
/// </list>
/// </summary>
[JsonConverter(typeof(StringEnumConverter<State>))]
public sealed record State : OpenStringEnum<State>
{
    private State(string value) : base(value)
    {
    }

    public static readonly State Pending = new("PENDING");

    public static readonly State Succeeded = new("SUCCEEDED");

    public static readonly State Failed = new("FAILED");

    public TResult Match<TResult>(Func<TResult> onPending,
        Func<TResult> onSucceeded,
        Func<TResult> onFailed,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Pending => onPending(),
            _ when this == Succeeded => onSucceeded(),
            _ when this == Failed => onFailed(),
            _ => otherwise(Value)
        };

    public void Match(Action onPending, Action onSucceeded, Action onFailed, Action<string> otherwise)
    {
        if (this == Pending) onPending();
        else if (this == Succeeded) onSucceeded();
        else if (this == Failed) onFailed();
        else otherwise(Value);
    }
}
