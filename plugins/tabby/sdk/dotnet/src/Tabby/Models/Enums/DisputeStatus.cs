using System;
using System.Text.Json.Serialization;
using Tabby.Core.Enum;

namespace Tabby.Models.Enums;

/// <summary>
/// The current status of the dispute:
///   - <c>new</c> - dispute pending merchant approval for refund or initiate a challenge
///   - <c>declined</c> - dispute was declined by Tabby support
///   - <c>cancelled</c> - dispute was canceled by customer
///   - <c>refunded</c> - dispute was approved or the order was refunded via Payments API
///   - <c>in_progress</c> - merchant challenged dispute and need a response from Tabby support
///   - <c>evidence_merchant</c> - waiting for evidence from the merchant
///   - <c>evidence_customer</c> - waiting for evidence from the customer
/// </summary>
[JsonConverter(typeof(StringEnumConverter<DisputeStatus>))]
public sealed record DisputeStatus : OpenStringEnum<DisputeStatus>
{
    private DisputeStatus(string value) : base(value)
    {
    }

    public static readonly DisputeStatus New = new("new");

    public static readonly DisputeStatus Declined = new("declined");

    public static readonly DisputeStatus Cancelled = new("cancelled");

    public static readonly DisputeStatus Refunded = new("refunded");

    public static readonly DisputeStatus InProgress = new("in_progress");

    public static readonly DisputeStatus EvidenceMerchant = new("evidence_merchant");

    public static readonly DisputeStatus EvidenceCustomer = new("evidence_customer");

    public TResult Match<TResult>(Func<TResult> onNew,
        Func<TResult> onDeclined,
        Func<TResult> onCancelled,
        Func<TResult> onRefunded,
        Func<TResult> onInProgress,
        Func<TResult> onEvidenceMerchant,
        Func<TResult> onEvidenceCustomer,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == New => onNew(),
            _ when this == Declined => onDeclined(),
            _ when this == Cancelled => onCancelled(),
            _ when this == Refunded => onRefunded(),
            _ when this == InProgress => onInProgress(),
            _ when this == EvidenceMerchant => onEvidenceMerchant(),
            _ when this == EvidenceCustomer => onEvidenceCustomer(),
            _ => otherwise(Value)
        };

    public void Match(Action onNew,
        Action onDeclined,
        Action onCancelled,
        Action onRefunded,
        Action onInProgress,
        Action onEvidenceMerchant,
        Action onEvidenceCustomer,
        Action<string> otherwise)
    {
        if (this == New) onNew();
        else if (this == Declined) onDeclined();
        else if (this == Cancelled) onCancelled();
        else if (this == Refunded) onRefunded();
        else if (this == InProgress) onInProgress();
        else if (this == EvidenceMerchant) onEvidenceMerchant();
        else if (this == EvidenceCustomer) onEvidenceCustomer();
        else otherwise(Value);
    }
}
