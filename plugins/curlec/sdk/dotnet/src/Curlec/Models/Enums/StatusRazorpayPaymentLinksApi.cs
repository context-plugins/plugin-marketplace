using System;
using System.Text.Json.Serialization;
using Curlec.Core.Enum;

namespace Curlec.Models.Enums;

/// <summary>
/// created: awaiting payment. partially_paid: one or more partial payments received. expired: past expiry with no full payment. cancelled: manually cancelled. paid: fully paid.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<StatusRazorpayPaymentLinksApi>))]
public sealed record StatusRazorpayPaymentLinksApi : OpenStringEnum<StatusRazorpayPaymentLinksApi>
{
    private StatusRazorpayPaymentLinksApi(string value) : base(value)
    {
    }

    public static readonly StatusRazorpayPaymentLinksApi Created = new("created");

    public static readonly StatusRazorpayPaymentLinksApi PartiallyPaid = new("partially_paid");

    public static readonly StatusRazorpayPaymentLinksApi Expired = new("expired");

    public static readonly StatusRazorpayPaymentLinksApi Cancelled = new("cancelled");

    public static readonly StatusRazorpayPaymentLinksApi Paid = new("paid");

    public TResult Match<TResult>(Func<TResult> onCreated,
        Func<TResult> onPartiallyPaid,
        Func<TResult> onExpired,
        Func<TResult> onCancelled,
        Func<TResult> onPaid,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Created => onCreated(),
            _ when this == PartiallyPaid => onPartiallyPaid(),
            _ when this == Expired => onExpired(),
            _ when this == Cancelled => onCancelled(),
            _ when this == Paid => onPaid(),
            _ => otherwise(Value)
        };

    public void Match(Action onCreated,
        Action onPartiallyPaid,
        Action onExpired,
        Action onCancelled,
        Action onPaid,
        Action<string> otherwise)
    {
        if (this == Created) onCreated();
        else if (this == PartiallyPaid) onPartiallyPaid();
        else if (this == Expired) onExpired();
        else if (this == Cancelled) onCancelled();
        else if (this == Paid) onPaid();
        else otherwise(Value);
    }
}
