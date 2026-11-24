using System;
using System.Text.Json.Serialization;
using Tabby.Core.Enum;

namespace Tabby.Models.Enums;

/// <summary>
/// The event type of the dispute history item:
///   - <c>dispute_created</c> - the customer raised a dispute;
///   - <c>dispute_approved</c> - disputed was approved and amount was refunded to customer;
///   - <c>dispute_declined</c> - dispute was declined by Tabby support;
///   - <c>dispute_canceled</c> - dispute was canceled by customer;
///   - <c>dispute_in_arbitration</c> - merchant challenged dispute (e.g incorrect amount);
///   - <c>dispute_amount_changed</c> - disputed amount was changed;
///   - <c>dispute_comment_added</c> - merchant added comment to the dispute;
///   - <c>evidence_merchant</c> - agent requested evidence from the merchant;
///   - <c>evidence_customer</c> - agent requested evidence from the customer;
///   - <c>evidence_merchant_provided</c> - merchant provided evidence;
///   - <c>evidence_customer_provided</c> - customer provided evidence;
///   - <c>merchant_14d_unresponsive</c> - merchant did not respond within 14 days;
///   - <c>customer_14d_unresponsive</c> - customer did not respond within 14 days.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<EventType>))]
public sealed record EventType : OpenStringEnum<EventType>
{
    private EventType(string value) : base(value)
    {
    }

    public static readonly EventType DisputeCreated = new("dispute_created");

    public static readonly EventType DisputeApproved = new("dispute_approved");

    public static readonly EventType DisputeDeclined = new("dispute_declined");

    public static readonly EventType DisputeCanceled = new("dispute_canceled");

    public static readonly EventType DisputeInArbitration = new("dispute_in_arbitration");

    public static readonly EventType DisputeAmountChanged = new("dispute_amount_changed");

    public static readonly EventType DisputeCommentAdded = new("dispute_comment_added");

    public static readonly EventType EvidenceMerchant = new("evidence_merchant");

    public static readonly EventType EvidenceCustomer = new("evidence_customer");

    public static readonly EventType EvidenceMerchantProvided = new("evidence_merchant_provided");

    public static readonly EventType EvidenceCustomerProvided = new("evidence_customer_provided");

    public static readonly EventType Merchant14DUnresponsive = new("merchant_14d_unresponsive");

    public static readonly EventType Customer14DUnresponsive = new("customer_14d_unresponsive");

    public TResult Match<TResult>(Func<TResult> onDisputeCreated,
        Func<TResult> onDisputeApproved,
        Func<TResult> onDisputeDeclined,
        Func<TResult> onDisputeCanceled,
        Func<TResult> onDisputeInArbitration,
        Func<TResult> onDisputeAmountChanged,
        Func<TResult> onDisputeCommentAdded,
        Func<TResult> onEvidenceMerchant,
        Func<TResult> onEvidenceCustomer,
        Func<TResult> onEvidenceMerchantProvided,
        Func<TResult> onEvidenceCustomerProvided,
        Func<TResult> onMerchant14DUnresponsive,
        Func<TResult> onCustomer14DUnresponsive,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == DisputeCreated => onDisputeCreated(),
            _ when this == DisputeApproved => onDisputeApproved(),
            _ when this == DisputeDeclined => onDisputeDeclined(),
            _ when this == DisputeCanceled => onDisputeCanceled(),
            _ when this == DisputeInArbitration => onDisputeInArbitration(),
            _ when this == DisputeAmountChanged => onDisputeAmountChanged(),
            _ when this == DisputeCommentAdded => onDisputeCommentAdded(),
            _ when this == EvidenceMerchant => onEvidenceMerchant(),
            _ when this == EvidenceCustomer => onEvidenceCustomer(),
            _ when this == EvidenceMerchantProvided => onEvidenceMerchantProvided(),
            _ when this == EvidenceCustomerProvided => onEvidenceCustomerProvided(),
            _ when this == Merchant14DUnresponsive => onMerchant14DUnresponsive(),
            _ when this == Customer14DUnresponsive => onCustomer14DUnresponsive(),
            _ => otherwise(Value)
        };

    public void Match(Action onDisputeCreated,
        Action onDisputeApproved,
        Action onDisputeDeclined,
        Action onDisputeCanceled,
        Action onDisputeInArbitration,
        Action onDisputeAmountChanged,
        Action onDisputeCommentAdded,
        Action onEvidenceMerchant,
        Action onEvidenceCustomer,
        Action onEvidenceMerchantProvided,
        Action onEvidenceCustomerProvided,
        Action onMerchant14DUnresponsive,
        Action onCustomer14DUnresponsive,
        Action<string> otherwise)
    {
        if (this == DisputeCreated) onDisputeCreated();
        else if (this == DisputeApproved) onDisputeApproved();
        else if (this == DisputeDeclined) onDisputeDeclined();
        else if (this == DisputeCanceled) onDisputeCanceled();
        else if (this == DisputeInArbitration) onDisputeInArbitration();
        else if (this == DisputeAmountChanged) onDisputeAmountChanged();
        else if (this == DisputeCommentAdded) onDisputeCommentAdded();
        else if (this == EvidenceMerchant) onEvidenceMerchant();
        else if (this == EvidenceCustomer) onEvidenceCustomer();
        else if (this == EvidenceMerchantProvided) onEvidenceMerchantProvided();
        else if (this == EvidenceCustomerProvided) onEvidenceCustomerProvided();
        else if (this == Merchant14DUnresponsive) onMerchant14DUnresponsive();
        else if (this == Customer14DUnresponsive) onCustomer14DUnresponsive();
        else otherwise(Value);
    }
}
