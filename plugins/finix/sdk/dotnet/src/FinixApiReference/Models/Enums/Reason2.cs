using System;
using System.Text.Json.Serialization;
using FinixApiReference.Core.Enum;

namespace FinixApiReference.Models.Enums;

/// <summary>
/// The reason for termination. Required if <c>is_terminated</c> is set to <c>true</c>.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Reason2>))]
public sealed record Reason2 : OpenStringEnum<Reason2>
{
    private Reason2(string value) : base(value)
    {
    }

    public static readonly Reason2 Churned = new("CHURNED");

    public static readonly Reason2 ComplianceViolation = new("COMPLIANCE_VIOLATION");

    public static readonly Reason2 ExcessiveAchReturns = new("EXCESSIVE_ACH_RETURNS");

    public static readonly Reason2 ExcessiveChargebacks = new("EXCESSIVE_CHARGEBACKS");

    public static readonly Reason2 Fraud = new("FRAUD");

    public static readonly Reason2 IdentityTheft = new("IDENTITY_THEFT");

    public static readonly Reason2 IllegalTransactions = new("ILLEGAL_TRANSACTIONS");

    public static readonly Reason2 Insolvency = new("INSOLVENCY");

    public static readonly Reason2 Other = new("OTHER");

    public static readonly Reason2 PciViolation = new("PCI_VIOLATION");

    public static readonly Reason2 ProcessorMigration = new("PROCESSOR_MIGRATION");

    public static readonly Reason2 SuspectedFraud = new("SUSPECTED_FRAUD");

    public static readonly Reason2 UnsupportedBusinessType = new("UNSUPPORTED_BUSINESS_TYPE");

    public static readonly Reason2 UnusualActivity = new("UNUSUAL_ACTIVITY");

    public static readonly Reason2 ViolatedMerchantTermsOfService = new("VIOLATED_MERCHANT_TERMS_OF_SERVICE");

    public TResult Match<TResult>(Func<TResult> onChurned,
        Func<TResult> onComplianceViolation,
        Func<TResult> onExcessiveAchReturns,
        Func<TResult> onExcessiveChargebacks,
        Func<TResult> onFraud,
        Func<TResult> onIdentityTheft,
        Func<TResult> onIllegalTransactions,
        Func<TResult> onInsolvency,
        Func<TResult> onOther,
        Func<TResult> onPciViolation,
        Func<TResult> onProcessorMigration,
        Func<TResult> onSuspectedFraud,
        Func<TResult> onUnsupportedBusinessType,
        Func<TResult> onUnusualActivity,
        Func<TResult> onViolatedMerchantTermsOfService,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Churned => onChurned(),
            _ when this == ComplianceViolation => onComplianceViolation(),
            _ when this == ExcessiveAchReturns => onExcessiveAchReturns(),
            _ when this == ExcessiveChargebacks => onExcessiveChargebacks(),
            _ when this == Fraud => onFraud(),
            _ when this == IdentityTheft => onIdentityTheft(),
            _ when this == IllegalTransactions => onIllegalTransactions(),
            _ when this == Insolvency => onInsolvency(),
            _ when this == Other => onOther(),
            _ when this == PciViolation => onPciViolation(),
            _ when this == ProcessorMigration => onProcessorMigration(),
            _ when this == SuspectedFraud => onSuspectedFraud(),
            _ when this == UnsupportedBusinessType => onUnsupportedBusinessType(),
            _ when this == UnusualActivity => onUnusualActivity(),
            _ when this == ViolatedMerchantTermsOfService => onViolatedMerchantTermsOfService(),
            _ => otherwise(Value)
        };

    public void Match(Action onChurned,
        Action onComplianceViolation,
        Action onExcessiveAchReturns,
        Action onExcessiveChargebacks,
        Action onFraud,
        Action onIdentityTheft,
        Action onIllegalTransactions,
        Action onInsolvency,
        Action onOther,
        Action onPciViolation,
        Action onProcessorMigration,
        Action onSuspectedFraud,
        Action onUnsupportedBusinessType,
        Action onUnusualActivity,
        Action onViolatedMerchantTermsOfService,
        Action<string> otherwise)
    {
        if (this == Churned) onChurned();
        else if (this == ComplianceViolation) onComplianceViolation();
        else if (this == ExcessiveAchReturns) onExcessiveAchReturns();
        else if (this == ExcessiveChargebacks) onExcessiveChargebacks();
        else if (this == Fraud) onFraud();
        else if (this == IdentityTheft) onIdentityTheft();
        else if (this == IllegalTransactions) onIllegalTransactions();
        else if (this == Insolvency) onInsolvency();
        else if (this == Other) onOther();
        else if (this == PciViolation) onPciViolation();
        else if (this == ProcessorMigration) onProcessorMigration();
        else if (this == SuspectedFraud) onSuspectedFraud();
        else if (this == UnsupportedBusinessType) onUnsupportedBusinessType();
        else if (this == UnusualActivity) onUnusualActivity();
        else if (this == ViolatedMerchantTermsOfService) onViolatedMerchantTermsOfService();
        else otherwise(Value);
    }
}
