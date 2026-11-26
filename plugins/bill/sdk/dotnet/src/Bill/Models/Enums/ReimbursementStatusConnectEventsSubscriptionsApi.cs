using System;
using System.Text.Json.Serialization;
using Bill.Core.Enum;

namespace Bill.Models.Enums;

/// <summary>
/// Enum for reimbursement status.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<ReimbursementStatusConnectEventsSubscriptionsApi>))]
public sealed record ReimbursementStatusConnectEventsSubscriptionsApi : OpenStringEnum<ReimbursementStatusConnectEventsSubscriptionsApi>
{
    private ReimbursementStatusConnectEventsSubscriptionsApi(string value) : base(value)
    {
    }

    public static readonly ReimbursementStatusConnectEventsSubscriptionsApi Unspecified = new("UNSPECIFIED");

    public static readonly ReimbursementStatusConnectEventsSubscriptionsApi Created = new("CREATED");

    public static readonly ReimbursementStatusConnectEventsSubscriptionsApi AwaitingApproval = new("AWAITING_APPROVAL");

    public static readonly ReimbursementStatusConnectEventsSubscriptionsApi ApprovalUndone = new("APPROVAL_UNDONE");

    public static readonly ReimbursementStatusConnectEventsSubscriptionsApi AwaitingTier2Approval = new(
        "AWAITING_TIER2_APPROVAL");

    public static readonly ReimbursementStatusConnectEventsSubscriptionsApi Tier2ApprovalUndone = new(
        "TIER2_APPROVAL_UNDONE");

    public static readonly ReimbursementStatusConnectEventsSubscriptionsApi Approved = new("APPROVED");

    public static readonly ReimbursementStatusConnectEventsSubscriptionsApi CancelPayment = new("CANCEL_PAYMENT");

    public static readonly ReimbursementStatusConnectEventsSubscriptionsApi FundingReceived = new("FUNDING_RECEIVED");

    public static readonly ReimbursementStatusConnectEventsSubscriptionsApi Paid = new("PAID");

    public static readonly ReimbursementStatusConnectEventsSubscriptionsApi PaymentFailed = new("PAYMENT_FAILED");

    public static readonly ReimbursementStatusConnectEventsSubscriptionsApi Denied = new("DENIED");

    public static readonly ReimbursementStatusConnectEventsSubscriptionsApi DenialUndone = new("DENIAL_UNDONE");

    public static readonly ReimbursementStatusConnectEventsSubscriptionsApi Deleted = new("DELETED");

    public TResult Match<TResult>(Func<TResult> onUnspecified,
        Func<TResult> onCreated,
        Func<TResult> onAwaitingApproval,
        Func<TResult> onApprovalUndone,
        Func<TResult> onAwaitingTier2Approval,
        Func<TResult> onTier2ApprovalUndone,
        Func<TResult> onApproved,
        Func<TResult> onCancelPayment,
        Func<TResult> onFundingReceived,
        Func<TResult> onPaid,
        Func<TResult> onPaymentFailed,
        Func<TResult> onDenied,
        Func<TResult> onDenialUndone,
        Func<TResult> onDeleted,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Unspecified => onUnspecified(),
            _ when this == Created => onCreated(),
            _ when this == AwaitingApproval => onAwaitingApproval(),
            _ when this == ApprovalUndone => onApprovalUndone(),
            _ when this == AwaitingTier2Approval => onAwaitingTier2Approval(),
            _ when this == Tier2ApprovalUndone => onTier2ApprovalUndone(),
            _ when this == Approved => onApproved(),
            _ when this == CancelPayment => onCancelPayment(),
            _ when this == FundingReceived => onFundingReceived(),
            _ when this == Paid => onPaid(),
            _ when this == PaymentFailed => onPaymentFailed(),
            _ when this == Denied => onDenied(),
            _ when this == DenialUndone => onDenialUndone(),
            _ when this == Deleted => onDeleted(),
            _ => otherwise(Value)
        };

    public void Match(Action onUnspecified,
        Action onCreated,
        Action onAwaitingApproval,
        Action onApprovalUndone,
        Action onAwaitingTier2Approval,
        Action onTier2ApprovalUndone,
        Action onApproved,
        Action onCancelPayment,
        Action onFundingReceived,
        Action onPaid,
        Action onPaymentFailed,
        Action onDenied,
        Action onDenialUndone,
        Action onDeleted,
        Action<string> otherwise)
    {
        if (this == Unspecified) onUnspecified();
        else if (this == Created) onCreated();
        else if (this == AwaitingApproval) onAwaitingApproval();
        else if (this == ApprovalUndone) onApprovalUndone();
        else if (this == AwaitingTier2Approval) onAwaitingTier2Approval();
        else if (this == Tier2ApprovalUndone) onTier2ApprovalUndone();
        else if (this == Approved) onApproved();
        else if (this == CancelPayment) onCancelPayment();
        else if (this == FundingReceived) onFundingReceived();
        else if (this == Paid) onPaid();
        else if (this == PaymentFailed) onPaymentFailed();
        else if (this == Denied) onDenied();
        else if (this == DenialUndone) onDenialUndone();
        else if (this == Deleted) onDeleted();
        else otherwise(Value);
    }
}
