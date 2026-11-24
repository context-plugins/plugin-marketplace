using System;
using System.Text.Json.Serialization;
using Divvy.Core.Enum;

namespace Divvy.Models.Enums;

/// <summary>
/// The enum Payment status dto.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<PaymentStatus>))]
public sealed record PaymentStatus : OpenStringEnum<PaymentStatus>
{
    private PaymentStatus(string value) : base(value)
    {
    }

    public static readonly PaymentStatus Approving = new("APPROVING");

    public static readonly PaymentStatus Scheduled = new("SCHEDULED");

    public static readonly PaymentStatus Paid = new("PAID");

    public static readonly PaymentStatus Cancelled = new("CANCELLED");

    public static readonly PaymentStatus Void = new("VOID");

    public static readonly PaymentStatus Escheated = new("ESCHEATED");

    public static readonly PaymentStatus Undefined = new("UNDEFINED");

    public TResult Match<TResult>(Func<TResult> onApproving,
        Func<TResult> onScheduled,
        Func<TResult> onPaid,
        Func<TResult> onCancelled,
        Func<TResult> onVoid,
        Func<TResult> onEscheated,
        Func<TResult> onUndefined,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Approving => onApproving(),
            _ when this == Scheduled => onScheduled(),
            _ when this == Paid => onPaid(),
            _ when this == Cancelled => onCancelled(),
            _ when this == Void => onVoid(),
            _ when this == Escheated => onEscheated(),
            _ when this == Undefined => onUndefined(),
            _ => otherwise(Value)
        };

    public void Match(Action onApproving,
        Action onScheduled,
        Action onPaid,
        Action onCancelled,
        Action onVoid,
        Action onEscheated,
        Action onUndefined,
        Action<string> otherwise)
    {
        if (this == Approving) onApproving();
        else if (this == Scheduled) onScheduled();
        else if (this == Paid) onPaid();
        else if (this == Cancelled) onCancelled();
        else if (this == Void) onVoid();
        else if (this == Escheated) onEscheated();
        else if (this == Undefined) onUndefined();
        else otherwise(Value);
    }
}
