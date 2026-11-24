using System;
using System.Text.Json.Serialization;
using Curlec.Core.Enum;

namespace Curlec.Models.Enums;

/// <summary>
/// Invoice lifecycle status. draft→issued→paid/partially_paid/cancelled/expired.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<StatusRazorpayInvoicesApi>))]
public sealed record StatusRazorpayInvoicesApi : OpenStringEnum<StatusRazorpayInvoicesApi>
{
    private StatusRazorpayInvoicesApi(string value) : base(value)
    {
    }

    public static readonly StatusRazorpayInvoicesApi Draft = new("draft");

    public static readonly StatusRazorpayInvoicesApi Issued = new("issued");

    public static readonly StatusRazorpayInvoicesApi PartiallyPaid = new("partially_paid");

    public static readonly StatusRazorpayInvoicesApi Paid = new("paid");

    public static readonly StatusRazorpayInvoicesApi Cancelled = new("cancelled");

    public static readonly StatusRazorpayInvoicesApi Expired = new("expired");

    public static readonly StatusRazorpayInvoicesApi Deleted = new("deleted");

    public TResult Match<TResult>(Func<TResult> onDraft,
        Func<TResult> onIssued,
        Func<TResult> onPartiallyPaid,
        Func<TResult> onPaid,
        Func<TResult> onCancelled,
        Func<TResult> onExpired,
        Func<TResult> onDeleted,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Draft => onDraft(),
            _ when this == Issued => onIssued(),
            _ when this == PartiallyPaid => onPartiallyPaid(),
            _ when this == Paid => onPaid(),
            _ when this == Cancelled => onCancelled(),
            _ when this == Expired => onExpired(),
            _ when this == Deleted => onDeleted(),
            _ => otherwise(Value)
        };

    public void Match(Action onDraft,
        Action onIssued,
        Action onPartiallyPaid,
        Action onPaid,
        Action onCancelled,
        Action onExpired,
        Action onDeleted,
        Action<string> otherwise)
    {
        if (this == Draft) onDraft();
        else if (this == Issued) onIssued();
        else if (this == PartiallyPaid) onPartiallyPaid();
        else if (this == Paid) onPaid();
        else if (this == Cancelled) onCancelled();
        else if (this == Expired) onExpired();
        else if (this == Deleted) onDeleted();
        else otherwise(Value);
    }
}
