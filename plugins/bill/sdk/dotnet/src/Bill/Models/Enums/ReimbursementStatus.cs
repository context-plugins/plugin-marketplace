using System;
using System.Text.Json.Serialization;
using Bill.Core.Enum;

namespace Bill.Models.Enums;

/// <summary>
/// Enum representing the status for a reimbursement in the Spend API.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<ReimbursementStatus>))]
public sealed record ReimbursementStatus : OpenStringEnum<ReimbursementStatus>
{
    private ReimbursementStatus(string value) : base(value)
    {
    }

    public static readonly ReimbursementStatus Created = new("CREATED");

    public static readonly ReimbursementStatus AwaitingApproval = new("AWAITING_APPROVAL");

    public static readonly ReimbursementStatus AwaitingTier2Approval = new("AWAITING_TIER2_APPROVAL");

    public static readonly ReimbursementStatus Tier2ApprovalUndone = new("TIER2_APPROVAL_UNDONE");

    public static readonly ReimbursementStatus ApprovalUndone = new("APPROVAL_UNDONE");

    public static readonly ReimbursementStatus DenialUndone = new("DENIAL_UNDONE");

    public static readonly ReimbursementStatus Approved = new("APPROVED");

    public static readonly ReimbursementStatus CancelPayment = new("CANCEL_PAYMENT");

    public static readonly ReimbursementStatus Paid = new("PAID");

    public static readonly ReimbursementStatus PaymentFailed = new("PAYMENT_FAILED");

    public static readonly ReimbursementStatus Denied = new("DENIED");

    public static readonly ReimbursementStatus Deleted = new("DELETED");

    public static readonly ReimbursementStatus Archived = new("ARCHIVED");

    public static readonly ReimbursementStatus BudgetApproval = new("BUDGET_APPROVAL");

    public static readonly ReimbursementStatus AdminApproval = new("ADMIN_APPROVAL");

    public static readonly ReimbursementStatus ReadyToPay = new("READY_TO_PAY");

    public static readonly ReimbursementStatus PaymentPending = new("PAYMENT_PENDING");

    public TResult Match<TResult>(Func<TResult> onCreated,
        Func<TResult> onAwaitingApproval,
        Func<TResult> onAwaitingTier2Approval,
        Func<TResult> onTier2ApprovalUndone,
        Func<TResult> onApprovalUndone,
        Func<TResult> onDenialUndone,
        Func<TResult> onApproved,
        Func<TResult> onCancelPayment,
        Func<TResult> onPaid,
        Func<TResult> onPaymentFailed,
        Func<TResult> onDenied,
        Func<TResult> onDeleted,
        Func<TResult> onArchived,
        Func<TResult> onBudgetApproval,
        Func<TResult> onAdminApproval,
        Func<TResult> onReadyToPay,
        Func<TResult> onPaymentPending,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Created => onCreated(),
            _ when this == AwaitingApproval => onAwaitingApproval(),
            _ when this == AwaitingTier2Approval => onAwaitingTier2Approval(),
            _ when this == Tier2ApprovalUndone => onTier2ApprovalUndone(),
            _ when this == ApprovalUndone => onApprovalUndone(),
            _ when this == DenialUndone => onDenialUndone(),
            _ when this == Approved => onApproved(),
            _ when this == CancelPayment => onCancelPayment(),
            _ when this == Paid => onPaid(),
            _ when this == PaymentFailed => onPaymentFailed(),
            _ when this == Denied => onDenied(),
            _ when this == Deleted => onDeleted(),
            _ when this == Archived => onArchived(),
            _ when this == BudgetApproval => onBudgetApproval(),
            _ when this == AdminApproval => onAdminApproval(),
            _ when this == ReadyToPay => onReadyToPay(),
            _ when this == PaymentPending => onPaymentPending(),
            _ => otherwise(Value)
        };

    public void Match(Action onCreated,
        Action onAwaitingApproval,
        Action onAwaitingTier2Approval,
        Action onTier2ApprovalUndone,
        Action onApprovalUndone,
        Action onDenialUndone,
        Action onApproved,
        Action onCancelPayment,
        Action onPaid,
        Action onPaymentFailed,
        Action onDenied,
        Action onDeleted,
        Action onArchived,
        Action onBudgetApproval,
        Action onAdminApproval,
        Action onReadyToPay,
        Action onPaymentPending,
        Action<string> otherwise)
    {
        if (this == Created) onCreated();
        else if (this == AwaitingApproval) onAwaitingApproval();
        else if (this == AwaitingTier2Approval) onAwaitingTier2Approval();
        else if (this == Tier2ApprovalUndone) onTier2ApprovalUndone();
        else if (this == ApprovalUndone) onApprovalUndone();
        else if (this == DenialUndone) onDenialUndone();
        else if (this == Approved) onApproved();
        else if (this == CancelPayment) onCancelPayment();
        else if (this == Paid) onPaid();
        else if (this == PaymentFailed) onPaymentFailed();
        else if (this == Denied) onDenied();
        else if (this == Deleted) onDeleted();
        else if (this == Archived) onArchived();
        else if (this == BudgetApproval) onBudgetApproval();
        else if (this == AdminApproval) onAdminApproval();
        else if (this == ReadyToPay) onReadyToPay();
        else if (this == PaymentPending) onPaymentPending();
        else otherwise(Value);
    }
}
