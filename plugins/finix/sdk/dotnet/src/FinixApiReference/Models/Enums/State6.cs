using System;
using System.Text.Json.Serialization;
using FinixApiReference.Core.Enum;

namespace FinixApiReference.Models.Enums;

/// <summary>
/// The state of the <c>Gateway Integration</c>. The possible values are:
/// <list type="bullet">
///   <item><description><c>PENDING</c>: The <c>Gateway Integration</c> is being processed.</description></item>
///   <item><description><c>SUCCEEDED</c>: The <c>Gateway Integration</c> was successful.</description></item>
///   <item><description><c>FAILED</c>: The <c>Gateway Integration</c> failed.</description></item>
/// </list>
/// </summary>
[JsonConverter(typeof(StringEnumConverter<State6>))]
public sealed record State6 : OpenStringEnum<State6>
{
    private State6(string value) : base(value)
    {
    }

    public static readonly State6 Failed = new("FAILED");

    public static readonly State6 Pending = new("PENDING");

    public static readonly State6 Succeeded = new("SUCCEEDED");

    public TResult Match<TResult>(Func<TResult> onFailed,
        Func<TResult> onPending,
        Func<TResult> onSucceeded,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Failed => onFailed(),
            _ when this == Pending => onPending(),
            _ when this == Succeeded => onSucceeded(),
            _ => otherwise(Value)
        };

    public void Match(Action onFailed, Action onPending, Action onSucceeded, Action<string> otherwise)
    {
        if (this == Failed) onFailed();
        else if (this == Pending) onPending();
        else if (this == Succeeded) onSucceeded();
        else otherwise(Value);
    }
}
