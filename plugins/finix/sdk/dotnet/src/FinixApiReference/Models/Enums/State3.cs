using System;
using System.Text.Json.Serialization;
using FinixApiReference.Core.Enum;

namespace FinixApiReference.Models.Enums;

/// <summary>
/// The status of the <c>Balance Adjustment</c>, indicating whether the adjustment was successful or failed.
/// <list type="bullet">
///   <item><description><c>SUBMITTED</c> - The balance adjustment has been initiated but is not yet confirmed.</description></item>
///   <item><description><c>SUCCEEDED</c> - The adjustment was successful, and the funds are available. This typically occurs 1-3 business days after <c>SUBMITTED</c>.</description></item>
///   <item><description><c>FAILED</c> - Finix was unable to process the adjustment, and the balance was not updated.</description></item>
///   <item><description><c>RETURN</c> - The adjustment was initially successful, but a subsequent return resulted in a reversal of the balance increase.</description></item>
/// </list>
/// </summary>
[JsonConverter(typeof(StringEnumConverter<State3>))]
public sealed record State3 : OpenStringEnum<State3>
{
    private State3(string value) : base(value)
    {
    }

    public static readonly State3 Failed = new("FAILED");

    public static readonly State3 Returned = new("RETURNED");

    public static readonly State3 Submitted = new("SUBMITTED");

    public static readonly State3 Succeeded = new("SUCCEEDED");

    public TResult Match<TResult>(Func<TResult> onFailed,
        Func<TResult> onReturned,
        Func<TResult> onSubmitted,
        Func<TResult> onSucceeded,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Failed => onFailed(),
            _ when this == Returned => onReturned(),
            _ when this == Submitted => onSubmitted(),
            _ when this == Succeeded => onSucceeded(),
            _ => otherwise(Value)
        };

    public void Match(Action onFailed,
        Action onReturned,
        Action onSubmitted,
        Action onSucceeded,
        Action<string> otherwise)
    {
        if (this == Failed) onFailed();
        else if (this == Returned) onReturned();
        else if (this == Submitted) onSubmitted();
        else if (this == Succeeded) onSucceeded();
        else otherwise(Value);
    }
}
