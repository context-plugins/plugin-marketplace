using System;
using System.Text.Json.Serialization;
using Tabby.Core.Enum;

namespace Tabby.Models.Enums;

/// <summary>
/// Cause of the dispute was created (selected by customer). There are only four reasons:
///   - <c>unreceived_refund</c> - a refund not received
///   - <c>identity_theft</c> - I did not place this order (also known as identity theft)
///   - <c>product_issue</c> - there was a problem with the product
///   - <c>not_delivered</c> - the order was not delivered
/// </summary>
[JsonConverter(typeof(StringEnumConverter<DisputeReason>))]
public sealed record DisputeReason : OpenStringEnum<DisputeReason>
{
    private DisputeReason(string value) : base(value)
    {
    }

    public static readonly DisputeReason UnreceivedRefund = new("unreceived_refund");

    public static readonly DisputeReason IdentityTheft = new("identity_theft");

    public static readonly DisputeReason ProductIssue = new("product_issue");

    public static readonly DisputeReason NotDelivered = new("not_delivered");

    public TResult Match<TResult>(Func<TResult> onUnreceivedRefund,
        Func<TResult> onIdentityTheft,
        Func<TResult> onProductIssue,
        Func<TResult> onNotDelivered,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == UnreceivedRefund => onUnreceivedRefund(),
            _ when this == IdentityTheft => onIdentityTheft(),
            _ when this == ProductIssue => onProductIssue(),
            _ when this == NotDelivered => onNotDelivered(),
            _ => otherwise(Value)
        };

    public void Match(Action onUnreceivedRefund,
        Action onIdentityTheft,
        Action onProductIssue,
        Action onNotDelivered,
        Action<string> otherwise)
    {
        if (this == UnreceivedRefund) onUnreceivedRefund();
        else if (this == IdentityTheft) onIdentityTheft();
        else if (this == ProductIssue) onProductIssue();
        else if (this == NotDelivered) onNotDelivered();
        else otherwise(Value);
    }
}
