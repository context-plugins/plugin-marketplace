using System;
using System.Text.Json.Serialization;
using Curlec.Core.Enum;

namespace Curlec.Models.Enums;

/// <summary>
/// created: initiated. authorized: bank approved, not yet captured. captured: funds collected. refunded: fully refunded. failed: transaction failed.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<StatusRazorpayPaymentsApi>))]
public sealed record StatusRazorpayPaymentsApi : OpenStringEnum<StatusRazorpayPaymentsApi>
{
    private StatusRazorpayPaymentsApi(string value) : base(value)
    {
    }

    public static readonly StatusRazorpayPaymentsApi Created = new("created");

    public static readonly StatusRazorpayPaymentsApi Authorized = new("authorized");

    public static readonly StatusRazorpayPaymentsApi Captured = new("captured");

    public static readonly StatusRazorpayPaymentsApi Refunded = new("refunded");

    public static readonly StatusRazorpayPaymentsApi Failed = new("failed");

    public TResult Match<TResult>(Func<TResult> onCreated,
        Func<TResult> onAuthorized,
        Func<TResult> onCaptured,
        Func<TResult> onRefunded,
        Func<TResult> onFailed,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Created => onCreated(),
            _ when this == Authorized => onAuthorized(),
            _ when this == Captured => onCaptured(),
            _ when this == Refunded => onRefunded(),
            _ when this == Failed => onFailed(),
            _ => otherwise(Value)
        };

    public void Match(Action onCreated,
        Action onAuthorized,
        Action onCaptured,
        Action onRefunded,
        Action onFailed,
        Action<string> otherwise)
    {
        if (this == Created) onCreated();
        else if (this == Authorized) onAuthorized();
        else if (this == Captured) onCaptured();
        else if (this == Refunded) onRefunded();
        else if (this == Failed) onFailed();
        else otherwise(Value);
    }
}
