using System;
using System.Text.Json.Serialization;
using Tabby.Core.Enum;

namespace Tabby.Models.Enums;

/// <summary>
/// Status of the current payment:
/// - <c>CREATED</c> means that the payment is created successfully, but not finished yet;
/// - <c>AUTHORIZED</c> and <c>CLOSED</c> mark the successfully approved and captured payments accordingly;
/// - <c>REJECTED</c> is returned when a customer is rejected during Tabby Checkout;
/// - <c>EXPIRED</c> is used when a customer cancels a payment or when Tabby doesn't receive a successfully paid transaction after timeout.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<PaymentStatus>))]
public sealed record PaymentStatus : OpenStringEnum<PaymentStatus>
{
    private PaymentStatus(string value) : base(value)
    {
    }

    public static readonly PaymentStatus Created = new("CREATED");

    public static readonly PaymentStatus Authorized = new("AUTHORIZED");

    public static readonly PaymentStatus Closed = new("CLOSED");

    public static readonly PaymentStatus Rejected = new("REJECTED");

    public static readonly PaymentStatus Expired = new("EXPIRED");

    public TResult Match<TResult>(Func<TResult> onCreated,
        Func<TResult> onAuthorized,
        Func<TResult> onClosed,
        Func<TResult> onRejected,
        Func<TResult> onExpired,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Created => onCreated(),
            _ when this == Authorized => onAuthorized(),
            _ when this == Closed => onClosed(),
            _ when this == Rejected => onRejected(),
            _ when this == Expired => onExpired(),
            _ => otherwise(Value)
        };

    public void Match(Action onCreated,
        Action onAuthorized,
        Action onClosed,
        Action onRejected,
        Action onExpired,
        Action<string> otherwise)
    {
        if (this == Created) onCreated();
        else if (this == Authorized) onAuthorized();
        else if (this == Closed) onClosed();
        else if (this == Rejected) onRejected();
        else if (this == Expired) onExpired();
        else otherwise(Value);
    }
}
