using System;
using System.Text.Json.Serialization;
using Bill.Core.Enum;

namespace Bill.Models.Enums;

/// <summary>
/// Unified payment status. This field provides BILL payment lifecycle updates based on the <c>status</c> and <c>disbursementStatus</c> values in the response.
/// <para>
/// This field is set as <c>PAID_OFFLINE</c> for the Record AP payment operation.
/// </para>
/// </summary>
[JsonConverter(typeof(StringEnumConverter<PaymentSingleStatus2>))]
public sealed record PaymentSingleStatus2 : OpenStringEnum<PaymentSingleStatus2>
{
    private PaymentSingleStatus2(string value) : base(value)
    {
    }

    public static readonly PaymentSingleStatus2 DisbursementFailedActionNeeded = new(
        "DISBURSEMENT_FAILED_ACTION_NEEDED");

    public static readonly PaymentSingleStatus2 DisbursementFailedVendorBankRejected = new(
        "DISBURSEMENT_FAILED_VENDOR_BANK_REJECTED");

    public static readonly PaymentSingleStatus2 FundingFailedActionNeeded = new("FUNDING_FAILED_ACTION_NEEDED");

    public static readonly PaymentSingleStatus2 Expiring = new("EXPIRING");

    public static readonly PaymentSingleStatus2 FundsEscheated = new("FUNDS_ESCHEATED");

    public static readonly PaymentSingleStatus2 Canceled = new("CANCELED");

    public static readonly PaymentSingleStatus2 FundingFailedVoided = new("FUNDING_FAILED_VOIDED");

    public static readonly PaymentSingleStatus2 Voided = new("VOIDED");

    public static readonly PaymentSingleStatus2 Cleared = new("CLEARED");

    public static readonly PaymentSingleStatus2 Delivered = new("DELIVERED");

    public static readonly PaymentSingleStatus2 DisbursementOnHold = new("DISBURSEMENT_ON_HOLD");

    public static readonly PaymentSingleStatus2 VoidPending = new("VOID_PENDING");

    public static readonly PaymentSingleStatus2 Sent = new("SENT");

    public static readonly PaymentSingleStatus2 DisbursementOnHoldPayerInReview = new(
        "DISBURSEMENT_ON_HOLD_PAYER_IN_REVIEW");

    public static readonly PaymentSingleStatus2 Processed = new("PROCESSED");

    public static readonly PaymentSingleStatus2 FundingStarted = new("FUNDING_STARTED");

    public static readonly PaymentSingleStatus2 FundingOnHold = new("FUNDING_ON_HOLD");

    public static readonly PaymentSingleStatus2 WaitingOnApproval = new("WAITING_ON_APPROVAL");

    public static readonly PaymentSingleStatus2 Scheduled = new("SCHEDULED");

    public static readonly PaymentSingleStatus2 ReadyToFund = new("READY_TO_FUND");

    public static readonly PaymentSingleStatus2 CancellationInProgress = new("CANCELLATION_IN_PROGRESS");

    public static readonly PaymentSingleStatus2 Undefined = new("UNDEFINED");

    public static readonly PaymentSingleStatus2 PartiallyClaimed = new("PARTIALLY_CLAIMED");

    public static readonly PaymentSingleStatus2 PaidOffline = new("PAID_OFFLINE");

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
