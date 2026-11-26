using System;
using System.Text.Json.Serialization;
using Bill.Core.Enum;

namespace Bill.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<PaymentSingleStatus>))]
public sealed record PaymentSingleStatus : OpenStringEnum<PaymentSingleStatus>
{
    private PaymentSingleStatus(string value) : base(value)
    {
    }

    public static readonly PaymentSingleStatus DisbursementFailedActionNeeded = new(
        "DISBURSEMENT_FAILED_ACTION_NEEDED");

    public static readonly PaymentSingleStatus DisbursementFailedVendorBankRejected = new(
        "DISBURSEMENT_FAILED_VENDOR_BANK_REJECTED");

    public static readonly PaymentSingleStatus FundingFailedActionNeeded = new("FUNDING_FAILED_ACTION_NEEDED");

    public static readonly PaymentSingleStatus Expiring = new("EXPIRING");

    public static readonly PaymentSingleStatus FundsEscheated = new("FUNDS_ESCHEATED");

    public static readonly PaymentSingleStatus Canceled = new("CANCELED");

    public static readonly PaymentSingleStatus FundingFailedVoided = new("FUNDING_FAILED_VOIDED");

    public static readonly PaymentSingleStatus Voided = new("VOIDED");

    public static readonly PaymentSingleStatus Cleared = new("CLEARED");

    public static readonly PaymentSingleStatus Delivered = new("DELIVERED");

    public static readonly PaymentSingleStatus DisbursementOnHold = new("DISBURSEMENT_ON_HOLD");

    public static readonly PaymentSingleStatus VoidPending = new("VOID_PENDING");

    public static readonly PaymentSingleStatus Sent = new("SENT");

    public static readonly PaymentSingleStatus DisbursementOnHoldPayerInReview = new(
        "DISBURSEMENT_ON_HOLD_PAYER_IN_REVIEW");

    public static readonly PaymentSingleStatus Processed = new("PROCESSED");

    public static readonly PaymentSingleStatus FundingStarted = new("FUNDING_STARTED");

    public static readonly PaymentSingleStatus FundingOnHold = new("FUNDING_ON_HOLD");

    public static readonly PaymentSingleStatus WaitingOnApproval = new("WAITING_ON_APPROVAL");

    public static readonly PaymentSingleStatus Scheduled = new("SCHEDULED");

    public static readonly PaymentSingleStatus ReadyToFund = new("READY_TO_FUND");

    public static readonly PaymentSingleStatus CancellationInProgress = new("CANCELLATION_IN_PROGRESS");

    public static readonly PaymentSingleStatus Undefined = new("UNDEFINED");

    public static readonly PaymentSingleStatus PartiallyClaimed = new("PARTIALLY_CLAIMED");

    public static readonly PaymentSingleStatus PaidOffline = new("PAID_OFFLINE");

    public TResult Match<TResult>(Func<TResult> onDisbursementFailedActionNeeded,
        Func<TResult> onDisbursementFailedVendorBankRejected,
        Func<TResult> onFundingFailedActionNeeded,
        Func<TResult> onExpiring,
        Func<TResult> onFundsEscheated,
        Func<TResult> onCanceled,
        Func<TResult> onFundingFailedVoided,
        Func<TResult> onVoided,
        Func<TResult> onCleared,
        Func<TResult> onDelivered,
        Func<TResult> onDisbursementOnHold,
        Func<TResult> onVoidPending,
        Func<TResult> onSent,
        Func<TResult> onDisbursementOnHoldPayerInReview,
        Func<TResult> onProcessed,
        Func<TResult> onFundingStarted,
        Func<TResult> onFundingOnHold,
        Func<TResult> onWaitingOnApproval,
        Func<TResult> onScheduled,
        Func<TResult> onReadyToFund,
        Func<TResult> onCancellationInProgress,
        Func<TResult> onUndefined,
        Func<TResult> onPartiallyClaimed,
        Func<TResult> onPaidOffline,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == DisbursementFailedActionNeeded => onDisbursementFailedActionNeeded(),
            _ when this == DisbursementFailedVendorBankRejected => onDisbursementFailedVendorBankRejected(),
            _ when this == FundingFailedActionNeeded => onFundingFailedActionNeeded(),
            _ when this == Expiring => onExpiring(),
            _ when this == FundsEscheated => onFundsEscheated(),
            _ when this == Canceled => onCanceled(),
            _ when this == FundingFailedVoided => onFundingFailedVoided(),
            _ when this == Voided => onVoided(),
            _ when this == Cleared => onCleared(),
            _ when this == Delivered => onDelivered(),
            _ when this == DisbursementOnHold => onDisbursementOnHold(),
            _ when this == VoidPending => onVoidPending(),
            _ when this == Sent => onSent(),
            _ when this == DisbursementOnHoldPayerInReview => onDisbursementOnHoldPayerInReview(),
            _ when this == Processed => onProcessed(),
            _ when this == FundingStarted => onFundingStarted(),
            _ when this == FundingOnHold => onFundingOnHold(),
            _ when this == WaitingOnApproval => onWaitingOnApproval(),
            _ when this == Scheduled => onScheduled(),
            _ when this == ReadyToFund => onReadyToFund(),
            _ when this == CancellationInProgress => onCancellationInProgress(),
            _ when this == Undefined => onUndefined(),
            _ when this == PartiallyClaimed => onPartiallyClaimed(),
            _ when this == PaidOffline => onPaidOffline(),
            _ => otherwise(Value)
        };

    public void Match(Action onDisbursementFailedActionNeeded,
        Action onDisbursementFailedVendorBankRejected,
        Action onFundingFailedActionNeeded,
        Action onExpiring,
        Action onFundsEscheated,
        Action onCanceled,
        Action onFundingFailedVoided,
        Action onVoided,
        Action onCleared,
        Action onDelivered,
        Action onDisbursementOnHold,
        Action onVoidPending,
        Action onSent,
        Action onDisbursementOnHoldPayerInReview,
        Action onProcessed,
        Action onFundingStarted,
        Action onFundingOnHold,
        Action onWaitingOnApproval,
        Action onScheduled,
        Action onReadyToFund,
        Action onCancellationInProgress,
        Action onUndefined,
        Action onPartiallyClaimed,
        Action onPaidOffline,
        Action<string> otherwise)
    {
        if (this == DisbursementFailedActionNeeded) onDisbursementFailedActionNeeded();
        else if (this == DisbursementFailedVendorBankRejected) onDisbursementFailedVendorBankRejected();
        else if (this == FundingFailedActionNeeded) onFundingFailedActionNeeded();
        else if (this == Expiring) onExpiring();
        else if (this == FundsEscheated) onFundsEscheated();
        else if (this == Canceled) onCanceled();
        else if (this == FundingFailedVoided) onFundingFailedVoided();
        else if (this == Voided) onVoided();
        else if (this == Cleared) onCleared();
        else if (this == Delivered) onDelivered();
        else if (this == DisbursementOnHold) onDisbursementOnHold();
        else if (this == VoidPending) onVoidPending();
        else if (this == Sent) onSent();
        else if (this == DisbursementOnHoldPayerInReview) onDisbursementOnHoldPayerInReview();
        else if (this == Processed) onProcessed();
        else if (this == FundingStarted) onFundingStarted();
        else if (this == FundingOnHold) onFundingOnHold();
        else if (this == WaitingOnApproval) onWaitingOnApproval();
        else if (this == Scheduled) onScheduled();
        else if (this == ReadyToFund) onReadyToFund();
        else if (this == CancellationInProgress) onCancellationInProgress();
        else if (this == Undefined) onUndefined();
        else if (this == PartiallyClaimed) onPartiallyClaimed();
        else if (this == PaidOffline) onPaidOffline();
        else otherwise(Value);
    }
}
