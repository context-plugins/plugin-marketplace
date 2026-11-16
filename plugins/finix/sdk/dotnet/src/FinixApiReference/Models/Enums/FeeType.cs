using System;
using System.Text.Json.Serialization;
using FinixApiReference.Core.Enum;

namespace FinixApiReference.Models.Enums;

/// <summary>
/// The type of <c>Fee</c>. Finix may return more enums than those provided. Ensure your code accepts additional enums returned by Finix.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<FeeType>))]
public sealed record FeeType : OpenStringEnum<FeeType>
{
    private FeeType(string value) : base(value)
    {
    }

    public static readonly FeeType AchBasisPoints = new("ACH_BASIS_POINTS");

    public static readonly FeeType AchCreditReturnFixedFee = new("ACH_CREDIT_RETURN_FIXED_FEE");

    public static readonly FeeType AchDebitReturnFixedFee = new("ACH_DEBIT_RETURN_FIXED_FEE");

    public static readonly FeeType AchFixed = new("ACH_FIXED");

    public static readonly FeeType AchMaxFixed = new("ACH_MAX_FIXED");

    public static readonly FeeType AchNoticeOfChangeCreditFixed = new("ACH_NOTICE_OF_CHANGE_CREDIT_FIXED");

    public static readonly FeeType AchNoticeOfChangeDebitFixed = new("ACH_NOTICE_OF_CHANGE_DEBIT_FIXED");

    public static readonly FeeType AchValidationPlaidFixed = new("ACH_VALIDATION_PLAID_FIXED");

    public static readonly FeeType AfterpayBasisPoints = new("AFTERPAY_BASIS_POINTS");

    public static readonly FeeType AfterpayFixed = new("AFTERPAY_FIXED");

    public static readonly FeeType AmericanExpressBasisPoints = new("AMERICAN_EXPRESS_BASIS_POINTS");

    public static readonly FeeType AmericanExpressExternallyFundedBasisPoints = new(
        "AMERICAN_EXPRESS_EXTERNALLY_FUNDED_BASIS_POINTS");

    public static readonly FeeType AmericanExpressExternallyFundedFixed = new(
        "AMERICAN_EXPRESS_EXTERNALLY_FUNDED_FIXED");

    public static readonly FeeType AmericanExpressFixed = new("AMERICAN_EXPRESS_FIXED");

    public static readonly FeeType AmericanExpressInterchange = new("AMERICAN_EXPRESS_INTERCHANGE");

    public static readonly FeeType AncillaryFixedFeePrimary = new("ANCILLARY_FIXED_FEE_PRIMARY");

    public static readonly FeeType AncillaryFixedFeeSecondary = new("ANCILLARY_FIXED_FEE_SECONDARY");

    public static readonly FeeType ApplicationFee = new("APPLICATION_FEE");

    public static readonly FeeType CardAccountUpdaterFixed = new("CARD_ACCOUNT_UPDATER_FIXED");

    public static readonly FeeType CardBasisPoints = new("CARD_BASIS_POINTS");

    public static readonly FeeType CardCrossBorderBasisPoints = new("CARD_CROSS_BORDER_BASIS_POINTS");

    public static readonly FeeType CardCrossBorderFixedFee = new("CARD_CROSS_BORDER_FIXED_FEE");

    public static readonly FeeType CardExternallyFundedBasisPoints = new("CARD_EXTERNALLY_FUNDED_BASIS_POINTS");

    public static readonly FeeType CardExternallyFundedFixed = new("CARD_EXTERNALLY_FUNDED_FIXED");

    public static readonly FeeType CardFixed = new("CARD_FIXED");

    public static readonly FeeType CardInterchange = new("CARD_INTERCHANGE");

    public static readonly FeeType Custom = new("CUSTOM");

    public static readonly FeeType CardNameVerificationFixed = new("CARD_NAME_VERIFICATION_FIXED");

    public static readonly FeeType CardNetworkTokenFixed = new("CARD_NETWORK_TOKEN_FIXED");

    public static readonly FeeType CashAppPayBasisPoints = new("CASH_APP_PAY_BASIS_POINTS");

    public static readonly FeeType CashAppPayFixed = new("CASH_APP_PAY_FIXED");

    public static readonly FeeType ComplianceFormOverdueFixed = new("COMPLIANCE_FORM_OVERDUE_FIXED");

    public static readonly FeeType DinersClubBasisPoints = new("DINERS_CLUB_BASIS_POINTS");

    public static readonly FeeType DinersClubFixed = new("DINERS_CLUB_FIXED");

    public static readonly FeeType DinersClubInterchange = new("DINERS_CLUB_INTERCHANGE");

    public static readonly FeeType DiscoverBasisPoints = new("DISCOVER_BASIS_POINTS");

    public static readonly FeeType DiscoverDataUsageFixed = new("DISCOVER_DATA_USAGE_FIXED");

    public static readonly FeeType DiscoverExternallyFundedBasisPoints = new("DISCOVER_EXTERNALLY_FUNDED_BASIS_POINTS");

    public static readonly FeeType DiscoverExternallyFundedFixed = new("DISCOVER_EXTERNALLY_FUNDED_FIXED");

    public static readonly FeeType DiscoverFixed = new("DISCOVER_FIXED");

    public static readonly FeeType DiscoverInterchange = new("DISCOVER_INTERCHANGE");

    public static readonly FeeType DiscoverNetworkAuthorizationFixed = new("DISCOVER_NETWORK_AUTHORIZATION_FIXED");

    public static readonly FeeType DisputeFixedFee = new("DISPUTE_FIXED_FEE");

    public static readonly FeeType DisputeInquiryFixedFee = new("DISPUTE_INQUIRY_FIXED_FEE");

    public static readonly FeeType EftBasisPoints = new("EFT_BASIS_POINTS");

    public static readonly FeeType EftCreditReturnFixedFee = new("EFT_CREDIT_RETURN_FIXED_FEE");

    public static readonly FeeType EftDebitReturnFixedFee = new("EFT_DEBIT_RETURN_FIXED_FEE");

    public static readonly FeeType EftFixed = new("EFT_FIXED");

    public static readonly FeeType EftMaxFixed = new("EFT_MAX_FIXED");

    public static readonly FeeType EftValidationPlaidFixed = new("EFT_VALIDATION_PLAID_FIXED");

    public static readonly FeeType GrossMonthlyFeesAchBasisPoints = new("GROSS_MONTHLY_FEES_ACH_BASIS_POINTS");

    public static readonly FeeType GrossMonthlyFeesAchFixed = new("GROSS_MONTHLY_FEES_ACH_FIXED");

    public static readonly FeeType GrossMonthlyFeesCardBasisPoints = new("GROSS_MONTHLY_FEES_CARD_BASIS_POINTS");

    public static readonly FeeType GrossMonthlyFeesCardFixed = new("GROSS_MONTHLY_FEES_CARD_FIXED");

    public static readonly FeeType GrossMonthlyFeesEftBasisPoints = new("GROSS_MONTHLY_FEES_EFT_BASIS_POINTS");

    public static readonly FeeType GrossMonthlyFeesEftFixed = new("GROSS_MONTHLY_FEES_EFT_FIXED");

    public static readonly FeeType InteracBasisPoints = new("INTERAC_BASIS_POINTS");

    public static readonly FeeType InteracFixed = new("INTERAC_FIXED");

    public static readonly FeeType InvoiceAchBasisPoints = new("INVOICE_ACH_BASIS_POINTS");

    public static readonly FeeType InvoiceAchFixed = new("INVOICE_ACH_FIXED");

    public static readonly FeeType InvoiceAchMaxFixed = new("INVOICE_ACH_MAX_FIXED");

    public static readonly FeeType InvoiceCardBasisPoints = new("INVOICE_CARD_BASIS_POINTS");

    public static readonly FeeType InvoiceCardFixed = new("INVOICE_CARD_FIXED");

    public static readonly FeeType InvoiceEftBasisPoints = new("INVOICE_EFT_BASIS_POINTS");

    public static readonly FeeType InvoiceEftFixed = new("INVOICE_EFT_FIXED");

    public static readonly FeeType InvoiceEftMaxFixed = new("INVOICE_EFT_MAX_FIXED");

    public static readonly FeeType JcbBasisPoints = new("JCB_BASIS_POINTS");

    public static readonly FeeType JcbFixed = new("JCB_FIXED");

    public static readonly FeeType JcbInterchange = new("JCB_INTERCHANGE");

    public static readonly FeeType MastercardAcquirerFeeBasisPoints = new("MASTERCARD_ACQUIRER_FEE_BASIS_POINTS");

    public static readonly FeeType MastercardBasisPoints = new("MASTERCARD_BASIS_POINTS");

    public static readonly FeeType MastercardFixed = new("MASTERCARD_FIXED");

    public static readonly FeeType MastercardInterchange = new("MASTERCARD_INTERCHANGE");

    public static readonly FeeType QualifiedTierBasisPointsFee = new("QUALIFIED_TIER_BASIS_POINTS_FEE");

    public static readonly FeeType QualifiedTierFixedFee = new("QUALIFIED_TIER_FIXED_FEE");

    public static readonly FeeType PaymentInstrumentTokenizationFixed = new("PAYMENT_INSTRUMENT_TOKENIZATION_FIXED");

    public static readonly FeeType SettlementFundingTransferAchBasisPoints = new(
        "SETTLEMENT_FUNDING_TRANSFER_ACH_BASIS_POINTS");

    public static readonly FeeType SettlementFundingTransferAchCreditReturnFixed = new(
        "SETTLEMENT_FUNDING_TRANSFER_ACH_CREDIT_RETURN_FIXED");

    public static readonly FeeType SettlementFundingTransferAchDebitReturnFixed = new(
        "SETTLEMENT_FUNDING_TRANSFER_ACH_DEBIT_RETURN_FIXED");

    public static readonly FeeType SettlementFundingTransferAchFixed = new("SETTLEMENT_FUNDING_TRANSFER_ACH_FIXED");

    public static readonly FeeType SettlementFundingTransferAchMaxFixed = new(
        "SETTLEMENT_FUNDING_TRANSFER_ACH_MAX_FIXED");

    public static readonly FeeType SettlementFundingTransferEftBasisPoints = new(
        "SETTLEMENT_FUNDING_TRANSFER_EFT_BASIS_POINTS");

    public static readonly FeeType SettlementFundingTransferEftCreditReturnFixed = new(
        "SETTLEMENT_FUNDING_TRANSFER_EFT_CREDIT_RETURN_FIXED");

    public static readonly FeeType SettlementFundingTransferEftDebitReturnFixed = new(
        "SETTLEMENT_FUNDING_TRANSFER_EFT_DEBIT_RETURN_FIXED");

    public static readonly FeeType SettlementFundingTransferEftFixed = new("SETTLEMENT_FUNDING_TRANSFER_EFT_FIXED");

    public static readonly FeeType SettlementFundingTransferEftMaxFixed = new(
        "SETTLEMENT_FUNDING_TRANSFER_EFT_MAX_FIXED");

    public static readonly FeeType SettlementFundingTransferInstantPayoutCardBasisPoints = new(
        "SETTLEMENT_FUNDING_TRANSFER_INSTANT_PAYOUT_CARD_BASIS_POINTS");

    public static readonly FeeType SettlementFundingTransferInstantPayoutCardFixed = new(
        "SETTLEMENT_FUNDING_TRANSFER_INSTANT_PAYOUT_CARD_FIXED");

    public static readonly FeeType SettlementFundingTransferInstantPayoutCardMaxFixed = new(
        "SETTLEMENT_FUNDING_TRANSFER_INSTANT_PAYOUT_CARD_MAX_FIXED");

    public static readonly FeeType SettlementFundingTransferNocCreditFixed = new(
        "SETTLEMENT_FUNDING_TRANSFER_NOC_CREDIT_FIXED");

    public static readonly FeeType SettlementFundingTransferNocDebitFixed = new(
        "SETTLEMENT_FUNDING_TRANSFER_NOC_DEBIT_FIXED");

    public static readonly FeeType SettlementFundingTransferSameDayAchBasisPoints = new(
        "SETTLEMENT_FUNDING_TRANSFER_SAME_DAY_ACH_BASIS_POINTS");

    public static readonly FeeType SettlementFundingTransferSameDayAchFixed = new(
        "SETTLEMENT_FUNDING_TRANSFER_SAME_DAY_ACH_FIXED");

    public static readonly FeeType SettlementFundingTransferSameDayAchMaxFixed = new(
        "SETTLEMENT_FUNDING_TRANSFER_SAME_DAY_ACH_MAX_FIXED");

    public static readonly FeeType SubscriptionAchBasisPoints = new("SUBSCRIPTION_ACH_BASIS_POINTS");

    public static readonly FeeType SubscriptionAchFixed = new("SUBSCRIPTION_ACH_FIXED");

    public static readonly FeeType SubscriptionAchMaxFixed = new("SUBSCRIPTION_ACH_MAX_FIXED");

    public static readonly FeeType SubscriptionCardBasisPoints = new("SUBSCRIPTION_CARD_BASIS_POINTS");

    public static readonly FeeType SubscriptionCardFixed = new("SUBSCRIPTION_CARD_FIXED");

    public static readonly FeeType SubscriptionEftBasisPoints = new("SUBSCRIPTION_EFT_BASIS_POINTS");

    public static readonly FeeType SubscriptionEftFixed = new("SUBSCRIPTION_EFT_FIXED");

    public static readonly FeeType SubscriptionEftMaxFixed = new("SUBSCRIPTION_EFT_MAX_FIXED");

    public static readonly FeeType SupplementalFeeFixed = new("SUPPLEMENTAL_FEE_FIXED");

    public static readonly FeeType ThirdPartyGatewayCybersourceBasisPoints = new(
        "THIRD_PARTY_GATEWAY_CYBERSOURCE_BASIS_POINTS");

    public static readonly FeeType ThirdPartyGatewayCybersourceFixed = new("THIRD_PARTY_GATEWAY_CYBERSOURCE_FIXED");

    public static readonly FeeType VisaAcquirerProcessingFixed = new("VISA_ACQUIRER_PROCESSING_FIXED");

    public static readonly FeeType VisaBaseIiCreditVoucherFixed = new("VISA_BASE_II_CREDIT_VOUCHER_FIXED");

    public static readonly FeeType VisaBaseIiSystemFileTransmissionFixed = new(
        "VISA_BASE_II_SYSTEM_FILE_TRANSMISSION_FIXED");

    public static readonly FeeType VisaBasisPoints = new("VISA_BASIS_POINTS");

    public static readonly FeeType VisaCreditVoucherFixed = new("VISA_CREDIT_VOUCHER_FIXED");

    public static readonly FeeType VisaFixed = new("VISA_FIXED");

    public static readonly FeeType VisaInterchange = new("VISA_INTERCHANGE");

    public static readonly FeeType VisaKilobyteAccessFixed = new("VISA_KILOBYTE_ACCESS_FIXED");

    public TResult Match<TResult>(Func<TResult> onAchBasisPoints,
        Func<TResult> onAchCreditReturnFixedFee,
        Func<TResult> onAchDebitReturnFixedFee,
        Func<TResult> onAchFixed,
        Func<TResult> onAchMaxFixed,
        Func<TResult> onAchNoticeOfChangeCreditFixed,
        Func<TResult> onAchNoticeOfChangeDebitFixed,
        Func<TResult> onAchValidationPlaidFixed,
        Func<TResult> onAfterpayBasisPoints,
        Func<TResult> onAfterpayFixed,
        Func<TResult> onAmericanExpressBasisPoints,
        Func<TResult> onAmericanExpressExternallyFundedBasisPoints,
        Func<TResult> onAmericanExpressExternallyFundedFixed,
        Func<TResult> onAmericanExpressFixed,
        Func<TResult> onAmericanExpressInterchange,
        Func<TResult> onAncillaryFixedFeePrimary,
        Func<TResult> onAncillaryFixedFeeSecondary,
        Func<TResult> onApplicationFee,
        Func<TResult> onCardAccountUpdaterFixed,
        Func<TResult> onCardBasisPoints,
        Func<TResult> onCardCrossBorderBasisPoints,
        Func<TResult> onCardCrossBorderFixedFee,
        Func<TResult> onCardExternallyFundedBasisPoints,
        Func<TResult> onCardExternallyFundedFixed,
        Func<TResult> onCardFixed,
        Func<TResult> onCardInterchange,
        Func<TResult> onCustom,
        Func<TResult> onCardNameVerificationFixed,
        Func<TResult> onCardNetworkTokenFixed,
        Func<TResult> onCashAppPayBasisPoints,
        Func<TResult> onCashAppPayFixed,
        Func<TResult> onComplianceFormOverdueFixed,
        Func<TResult> onDinersClubBasisPoints,
        Func<TResult> onDinersClubFixed,
        Func<TResult> onDinersClubInterchange,
        Func<TResult> onDiscoverBasisPoints,
        Func<TResult> onDiscoverDataUsageFixed,
        Func<TResult> onDiscoverExternallyFundedBasisPoints,
        Func<TResult> onDiscoverExternallyFundedFixed,
        Func<TResult> onDiscoverFixed,
        Func<TResult> onDiscoverInterchange,
        Func<TResult> onDiscoverNetworkAuthorizationFixed,
        Func<TResult> onDisputeFixedFee,
        Func<TResult> onDisputeInquiryFixedFee,
        Func<TResult> onEftBasisPoints,
        Func<TResult> onEftCreditReturnFixedFee,
        Func<TResult> onEftDebitReturnFixedFee,
        Func<TResult> onEftFixed,
        Func<TResult> onEftMaxFixed,
        Func<TResult> onEftValidationPlaidFixed,
        Func<TResult> onGrossMonthlyFeesAchBasisPoints,
        Func<TResult> onGrossMonthlyFeesAchFixed,
        Func<TResult> onGrossMonthlyFeesCardBasisPoints,
        Func<TResult> onGrossMonthlyFeesCardFixed,
        Func<TResult> onGrossMonthlyFeesEftBasisPoints,
        Func<TResult> onGrossMonthlyFeesEftFixed,
        Func<TResult> onInteracBasisPoints,
        Func<TResult> onInteracFixed,
        Func<TResult> onInvoiceAchBasisPoints,
        Func<TResult> onInvoiceAchFixed,
        Func<TResult> onInvoiceAchMaxFixed,
        Func<TResult> onInvoiceCardBasisPoints,
        Func<TResult> onInvoiceCardFixed,
        Func<TResult> onInvoiceEftBasisPoints,
        Func<TResult> onInvoiceEftFixed,
        Func<TResult> onInvoiceEftMaxFixed,
        Func<TResult> onJcbBasisPoints,
        Func<TResult> onJcbFixed,
        Func<TResult> onJcbInterchange,
        Func<TResult> onMastercardAcquirerFeeBasisPoints,
        Func<TResult> onMastercardBasisPoints,
        Func<TResult> onMastercardFixed,
        Func<TResult> onMastercardInterchange,
        Func<TResult> onQualifiedTierBasisPointsFee,
        Func<TResult> onQualifiedTierFixedFee,
        Func<TResult> onPaymentInstrumentTokenizationFixed,
        Func<TResult> onSettlementFundingTransferAchBasisPoints,
        Func<TResult> onSettlementFundingTransferAchCreditReturnFixed,
        Func<TResult> onSettlementFundingTransferAchDebitReturnFixed,
        Func<TResult> onSettlementFundingTransferAchFixed,
        Func<TResult> onSettlementFundingTransferAchMaxFixed,
        Func<TResult> onSettlementFundingTransferEftBasisPoints,
        Func<TResult> onSettlementFundingTransferEftCreditReturnFixed,
        Func<TResult> onSettlementFundingTransferEftDebitReturnFixed,
        Func<TResult> onSettlementFundingTransferEftFixed,
        Func<TResult> onSettlementFundingTransferEftMaxFixed,
        Func<TResult> onSettlementFundingTransferInstantPayoutCardBasisPoints,
        Func<TResult> onSettlementFundingTransferInstantPayoutCardFixed,
        Func<TResult> onSettlementFundingTransferInstantPayoutCardMaxFixed,
        Func<TResult> onSettlementFundingTransferNocCreditFixed,
        Func<TResult> onSettlementFundingTransferNocDebitFixed,
        Func<TResult> onSettlementFundingTransferSameDayAchBasisPoints,
        Func<TResult> onSettlementFundingTransferSameDayAchFixed,
        Func<TResult> onSettlementFundingTransferSameDayAchMaxFixed,
        Func<TResult> onSubscriptionAchBasisPoints,
        Func<TResult> onSubscriptionAchFixed,
        Func<TResult> onSubscriptionAchMaxFixed,
        Func<TResult> onSubscriptionCardBasisPoints,
        Func<TResult> onSubscriptionCardFixed,
        Func<TResult> onSubscriptionEftBasisPoints,
        Func<TResult> onSubscriptionEftFixed,
        Func<TResult> onSubscriptionEftMaxFixed,
        Func<TResult> onSupplementalFeeFixed,
        Func<TResult> onThirdPartyGatewayCybersourceBasisPoints,
        Func<TResult> onThirdPartyGatewayCybersourceFixed,
        Func<TResult> onVisaAcquirerProcessingFixed,
        Func<TResult> onVisaBaseIiCreditVoucherFixed,
        Func<TResult> onVisaBaseIiSystemFileTransmissionFixed,
        Func<TResult> onVisaBasisPoints,
        Func<TResult> onVisaCreditVoucherFixed,
        Func<TResult> onVisaFixed,
        Func<TResult> onVisaInterchange,
        Func<TResult> onVisaKilobyteAccessFixed,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == AchBasisPoints => onAchBasisPoints(),
            _ when this == AchCreditReturnFixedFee => onAchCreditReturnFixedFee(),
            _ when this == AchDebitReturnFixedFee => onAchDebitReturnFixedFee(),
            _ when this == AchFixed => onAchFixed(),
            _ when this == AchMaxFixed => onAchMaxFixed(),
            _ when this == AchNoticeOfChangeCreditFixed => onAchNoticeOfChangeCreditFixed(),
            _ when this == AchNoticeOfChangeDebitFixed => onAchNoticeOfChangeDebitFixed(),
            _ when this == AchValidationPlaidFixed => onAchValidationPlaidFixed(),
            _ when this == AfterpayBasisPoints => onAfterpayBasisPoints(),
            _ when this == AfterpayFixed => onAfterpayFixed(),
            _ when this == AmericanExpressBasisPoints => onAmericanExpressBasisPoints(),
            _ when this == AmericanExpressExternallyFundedBasisPoints => onAmericanExpressExternallyFundedBasisPoints(),
            _ when this == AmericanExpressExternallyFundedFixed => onAmericanExpressExternallyFundedFixed(),
            _ when this == AmericanExpressFixed => onAmericanExpressFixed(),
            _ when this == AmericanExpressInterchange => onAmericanExpressInterchange(),
            _ when this == AncillaryFixedFeePrimary => onAncillaryFixedFeePrimary(),
            _ when this == AncillaryFixedFeeSecondary => onAncillaryFixedFeeSecondary(),
            _ when this == ApplicationFee => onApplicationFee(),
            _ when this == CardAccountUpdaterFixed => onCardAccountUpdaterFixed(),
            _ when this == CardBasisPoints => onCardBasisPoints(),
            _ when this == CardCrossBorderBasisPoints => onCardCrossBorderBasisPoints(),
            _ when this == CardCrossBorderFixedFee => onCardCrossBorderFixedFee(),
            _ when this == CardExternallyFundedBasisPoints => onCardExternallyFundedBasisPoints(),
            _ when this == CardExternallyFundedFixed => onCardExternallyFundedFixed(),
            _ when this == CardFixed => onCardFixed(),
            _ when this == CardInterchange => onCardInterchange(),
            _ when this == Custom => onCustom(),
            _ when this == CardNameVerificationFixed => onCardNameVerificationFixed(),
            _ when this == CardNetworkTokenFixed => onCardNetworkTokenFixed(),
            _ when this == CashAppPayBasisPoints => onCashAppPayBasisPoints(),
            _ when this == CashAppPayFixed => onCashAppPayFixed(),
            _ when this == ComplianceFormOverdueFixed => onComplianceFormOverdueFixed(),
            _ when this == DinersClubBasisPoints => onDinersClubBasisPoints(),
            _ when this == DinersClubFixed => onDinersClubFixed(),
            _ when this == DinersClubInterchange => onDinersClubInterchange(),
            _ when this == DiscoverBasisPoints => onDiscoverBasisPoints(),
            _ when this == DiscoverDataUsageFixed => onDiscoverDataUsageFixed(),
            _ when this == DiscoverExternallyFundedBasisPoints => onDiscoverExternallyFundedBasisPoints(),
            _ when this == DiscoverExternallyFundedFixed => onDiscoverExternallyFundedFixed(),
            _ when this == DiscoverFixed => onDiscoverFixed(),
            _ when this == DiscoverInterchange => onDiscoverInterchange(),
            _ when this == DiscoverNetworkAuthorizationFixed => onDiscoverNetworkAuthorizationFixed(),
            _ when this == DisputeFixedFee => onDisputeFixedFee(),
            _ when this == DisputeInquiryFixedFee => onDisputeInquiryFixedFee(),
            _ when this == EftBasisPoints => onEftBasisPoints(),
            _ when this == EftCreditReturnFixedFee => onEftCreditReturnFixedFee(),
            _ when this == EftDebitReturnFixedFee => onEftDebitReturnFixedFee(),
            _ when this == EftFixed => onEftFixed(),
            _ when this == EftMaxFixed => onEftMaxFixed(),
            _ when this == EftValidationPlaidFixed => onEftValidationPlaidFixed(),
            _ when this == GrossMonthlyFeesAchBasisPoints => onGrossMonthlyFeesAchBasisPoints(),
            _ when this == GrossMonthlyFeesAchFixed => onGrossMonthlyFeesAchFixed(),
            _ when this == GrossMonthlyFeesCardBasisPoints => onGrossMonthlyFeesCardBasisPoints(),
            _ when this == GrossMonthlyFeesCardFixed => onGrossMonthlyFeesCardFixed(),
            _ when this == GrossMonthlyFeesEftBasisPoints => onGrossMonthlyFeesEftBasisPoints(),
            _ when this == GrossMonthlyFeesEftFixed => onGrossMonthlyFeesEftFixed(),
            _ when this == InteracBasisPoints => onInteracBasisPoints(),
            _ when this == InteracFixed => onInteracFixed(),
            _ when this == InvoiceAchBasisPoints => onInvoiceAchBasisPoints(),
            _ when this == InvoiceAchFixed => onInvoiceAchFixed(),
            _ when this == InvoiceAchMaxFixed => onInvoiceAchMaxFixed(),
            _ when this == InvoiceCardBasisPoints => onInvoiceCardBasisPoints(),
            _ when this == InvoiceCardFixed => onInvoiceCardFixed(),
            _ when this == InvoiceEftBasisPoints => onInvoiceEftBasisPoints(),
            _ when this == InvoiceEftFixed => onInvoiceEftFixed(),
            _ when this == InvoiceEftMaxFixed => onInvoiceEftMaxFixed(),
            _ when this == JcbBasisPoints => onJcbBasisPoints(),
            _ when this == JcbFixed => onJcbFixed(),
            _ when this == JcbInterchange => onJcbInterchange(),
            _ when this == MastercardAcquirerFeeBasisPoints => onMastercardAcquirerFeeBasisPoints(),
            _ when this == MastercardBasisPoints => onMastercardBasisPoints(),
            _ when this == MastercardFixed => onMastercardFixed(),
            _ when this == MastercardInterchange => onMastercardInterchange(),
            _ when this == QualifiedTierBasisPointsFee => onQualifiedTierBasisPointsFee(),
            _ when this == QualifiedTierFixedFee => onQualifiedTierFixedFee(),
            _ when this == PaymentInstrumentTokenizationFixed => onPaymentInstrumentTokenizationFixed(),
            _ when this == SettlementFundingTransferAchBasisPoints => onSettlementFundingTransferAchBasisPoints(),
            _ when this ==
                SettlementFundingTransferAchCreditReturnFixed => onSettlementFundingTransferAchCreditReturnFixed(),
            _ when this ==
                SettlementFundingTransferAchDebitReturnFixed => onSettlementFundingTransferAchDebitReturnFixed(),
            _ when this == SettlementFundingTransferAchFixed => onSettlementFundingTransferAchFixed(),
            _ when this == SettlementFundingTransferAchMaxFixed => onSettlementFundingTransferAchMaxFixed(),
            _ when this == SettlementFundingTransferEftBasisPoints => onSettlementFundingTransferEftBasisPoints(),
            _ when this ==
                SettlementFundingTransferEftCreditReturnFixed => onSettlementFundingTransferEftCreditReturnFixed(),
            _ when this ==
                SettlementFundingTransferEftDebitReturnFixed => onSettlementFundingTransferEftDebitReturnFixed(),
            _ when this == SettlementFundingTransferEftFixed => onSettlementFundingTransferEftFixed(),
            _ when this == SettlementFundingTransferEftMaxFixed => onSettlementFundingTransferEftMaxFixed(),
            _ when this ==
                SettlementFundingTransferInstantPayoutCardBasisPoints => onSettlementFundingTransferInstantPayoutCardBasisPoints(),
            _ when this ==
                SettlementFundingTransferInstantPayoutCardFixed => onSettlementFundingTransferInstantPayoutCardFixed(),
            _ when this ==
                SettlementFundingTransferInstantPayoutCardMaxFixed => onSettlementFundingTransferInstantPayoutCardMaxFixed(),
            _ when this == SettlementFundingTransferNocCreditFixed => onSettlementFundingTransferNocCreditFixed(),
            _ when this == SettlementFundingTransferNocDebitFixed => onSettlementFundingTransferNocDebitFixed(),
            _ when this ==
                SettlementFundingTransferSameDayAchBasisPoints => onSettlementFundingTransferSameDayAchBasisPoints(),
            _ when this == SettlementFundingTransferSameDayAchFixed => onSettlementFundingTransferSameDayAchFixed(),
            _ when this ==
                SettlementFundingTransferSameDayAchMaxFixed => onSettlementFundingTransferSameDayAchMaxFixed(),
            _ when this == SubscriptionAchBasisPoints => onSubscriptionAchBasisPoints(),
            _ when this == SubscriptionAchFixed => onSubscriptionAchFixed(),
            _ when this == SubscriptionAchMaxFixed => onSubscriptionAchMaxFixed(),
            _ when this == SubscriptionCardBasisPoints => onSubscriptionCardBasisPoints(),
            _ when this == SubscriptionCardFixed => onSubscriptionCardFixed(),
            _ when this == SubscriptionEftBasisPoints => onSubscriptionEftBasisPoints(),
            _ when this == SubscriptionEftFixed => onSubscriptionEftFixed(),
            _ when this == SubscriptionEftMaxFixed => onSubscriptionEftMaxFixed(),
            _ when this == SupplementalFeeFixed => onSupplementalFeeFixed(),
            _ when this == ThirdPartyGatewayCybersourceBasisPoints => onThirdPartyGatewayCybersourceBasisPoints(),
            _ when this == ThirdPartyGatewayCybersourceFixed => onThirdPartyGatewayCybersourceFixed(),
            _ when this == VisaAcquirerProcessingFixed => onVisaAcquirerProcessingFixed(),
            _ when this == VisaBaseIiCreditVoucherFixed => onVisaBaseIiCreditVoucherFixed(),
            _ when this == VisaBaseIiSystemFileTransmissionFixed => onVisaBaseIiSystemFileTransmissionFixed(),
            _ when this == VisaBasisPoints => onVisaBasisPoints(),
            _ when this == VisaCreditVoucherFixed => onVisaCreditVoucherFixed(),
            _ when this == VisaFixed => onVisaFixed(),
            _ when this == VisaInterchange => onVisaInterchange(),
            _ when this == VisaKilobyteAccessFixed => onVisaKilobyteAccessFixed(),
            _ => otherwise(Value)
        };

    public void Match(Action onAchBasisPoints,
        Action onAchCreditReturnFixedFee,
        Action onAchDebitReturnFixedFee,
        Action onAchFixed,
        Action onAchMaxFixed,
        Action onAchNoticeOfChangeCreditFixed,
        Action onAchNoticeOfChangeDebitFixed,
        Action onAchValidationPlaidFixed,
        Action onAfterpayBasisPoints,
        Action onAfterpayFixed,
        Action onAmericanExpressBasisPoints,
        Action onAmericanExpressExternallyFundedBasisPoints,
        Action onAmericanExpressExternallyFundedFixed,
        Action onAmericanExpressFixed,
        Action onAmericanExpressInterchange,
        Action onAncillaryFixedFeePrimary,
        Action onAncillaryFixedFeeSecondary,
        Action onApplicationFee,
        Action onCardAccountUpdaterFixed,
        Action onCardBasisPoints,
        Action onCardCrossBorderBasisPoints,
        Action onCardCrossBorderFixedFee,
        Action onCardExternallyFundedBasisPoints,
        Action onCardExternallyFundedFixed,
        Action onCardFixed,
        Action onCardInterchange,
        Action onCustom,
        Action onCardNameVerificationFixed,
        Action onCardNetworkTokenFixed,
        Action onCashAppPayBasisPoints,
        Action onCashAppPayFixed,
        Action onComplianceFormOverdueFixed,
        Action onDinersClubBasisPoints,
        Action onDinersClubFixed,
        Action onDinersClubInterchange,
        Action onDiscoverBasisPoints,
        Action onDiscoverDataUsageFixed,
        Action onDiscoverExternallyFundedBasisPoints,
        Action onDiscoverExternallyFundedFixed,
        Action onDiscoverFixed,
        Action onDiscoverInterchange,
        Action onDiscoverNetworkAuthorizationFixed,
        Action onDisputeFixedFee,
        Action onDisputeInquiryFixedFee,
        Action onEftBasisPoints,
        Action onEftCreditReturnFixedFee,
        Action onEftDebitReturnFixedFee,
        Action onEftFixed,
        Action onEftMaxFixed,
        Action onEftValidationPlaidFixed,
        Action onGrossMonthlyFeesAchBasisPoints,
        Action onGrossMonthlyFeesAchFixed,
        Action onGrossMonthlyFeesCardBasisPoints,
        Action onGrossMonthlyFeesCardFixed,
        Action onGrossMonthlyFeesEftBasisPoints,
        Action onGrossMonthlyFeesEftFixed,
        Action onInteracBasisPoints,
        Action onInteracFixed,
        Action onInvoiceAchBasisPoints,
        Action onInvoiceAchFixed,
        Action onInvoiceAchMaxFixed,
        Action onInvoiceCardBasisPoints,
        Action onInvoiceCardFixed,
        Action onInvoiceEftBasisPoints,
        Action onInvoiceEftFixed,
        Action onInvoiceEftMaxFixed,
        Action onJcbBasisPoints,
        Action onJcbFixed,
        Action onJcbInterchange,
        Action onMastercardAcquirerFeeBasisPoints,
        Action onMastercardBasisPoints,
        Action onMastercardFixed,
        Action onMastercardInterchange,
        Action onQualifiedTierBasisPointsFee,
        Action onQualifiedTierFixedFee,
        Action onPaymentInstrumentTokenizationFixed,
        Action onSettlementFundingTransferAchBasisPoints,
        Action onSettlementFundingTransferAchCreditReturnFixed,
        Action onSettlementFundingTransferAchDebitReturnFixed,
        Action onSettlementFundingTransferAchFixed,
        Action onSettlementFundingTransferAchMaxFixed,
        Action onSettlementFundingTransferEftBasisPoints,
        Action onSettlementFundingTransferEftCreditReturnFixed,
        Action onSettlementFundingTransferEftDebitReturnFixed,
        Action onSettlementFundingTransferEftFixed,
        Action onSettlementFundingTransferEftMaxFixed,
        Action onSettlementFundingTransferInstantPayoutCardBasisPoints,
        Action onSettlementFundingTransferInstantPayoutCardFixed,
        Action onSettlementFundingTransferInstantPayoutCardMaxFixed,
        Action onSettlementFundingTransferNocCreditFixed,
        Action onSettlementFundingTransferNocDebitFixed,
        Action onSettlementFundingTransferSameDayAchBasisPoints,
        Action onSettlementFundingTransferSameDayAchFixed,
        Action onSettlementFundingTransferSameDayAchMaxFixed,
        Action onSubscriptionAchBasisPoints,
        Action onSubscriptionAchFixed,
        Action onSubscriptionAchMaxFixed,
        Action onSubscriptionCardBasisPoints,
        Action onSubscriptionCardFixed,
        Action onSubscriptionEftBasisPoints,
        Action onSubscriptionEftFixed,
        Action onSubscriptionEftMaxFixed,
        Action onSupplementalFeeFixed,
        Action onThirdPartyGatewayCybersourceBasisPoints,
        Action onThirdPartyGatewayCybersourceFixed,
        Action onVisaAcquirerProcessingFixed,
        Action onVisaBaseIiCreditVoucherFixed,
        Action onVisaBaseIiSystemFileTransmissionFixed,
        Action onVisaBasisPoints,
        Action onVisaCreditVoucherFixed,
        Action onVisaFixed,
        Action onVisaInterchange,
        Action onVisaKilobyteAccessFixed,
        Action<string> otherwise)
    {
        if (this == AchBasisPoints) onAchBasisPoints();
        else if (this == AchCreditReturnFixedFee) onAchCreditReturnFixedFee();
        else if (this == AchDebitReturnFixedFee) onAchDebitReturnFixedFee();
        else if (this == AchFixed) onAchFixed();
        else if (this == AchMaxFixed) onAchMaxFixed();
        else if (this == AchNoticeOfChangeCreditFixed) onAchNoticeOfChangeCreditFixed();
        else if (this == AchNoticeOfChangeDebitFixed) onAchNoticeOfChangeDebitFixed();
        else if (this == AchValidationPlaidFixed) onAchValidationPlaidFixed();
        else if (this == AfterpayBasisPoints) onAfterpayBasisPoints();
        else if (this == AfterpayFixed) onAfterpayFixed();
        else if (this == AmericanExpressBasisPoints) onAmericanExpressBasisPoints();
        else if (this == AmericanExpressExternallyFundedBasisPoints) onAmericanExpressExternallyFundedBasisPoints();
        else if (this == AmericanExpressExternallyFundedFixed) onAmericanExpressExternallyFundedFixed();
        else if (this == AmericanExpressFixed) onAmericanExpressFixed();
        else if (this == AmericanExpressInterchange) onAmericanExpressInterchange();
        else if (this == AncillaryFixedFeePrimary) onAncillaryFixedFeePrimary();
        else if (this == AncillaryFixedFeeSecondary) onAncillaryFixedFeeSecondary();
        else if (this == ApplicationFee) onApplicationFee();
        else if (this == CardAccountUpdaterFixed) onCardAccountUpdaterFixed();
        else if (this == CardBasisPoints) onCardBasisPoints();
        else if (this == CardCrossBorderBasisPoints) onCardCrossBorderBasisPoints();
        else if (this == CardCrossBorderFixedFee) onCardCrossBorderFixedFee();
        else if (this == CardExternallyFundedBasisPoints) onCardExternallyFundedBasisPoints();
        else if (this == CardExternallyFundedFixed) onCardExternallyFundedFixed();
        else if (this == CardFixed) onCardFixed();
        else if (this == CardInterchange) onCardInterchange();
        else if (this == Custom) onCustom();
        else if (this == CardNameVerificationFixed) onCardNameVerificationFixed();
        else if (this == CardNetworkTokenFixed) onCardNetworkTokenFixed();
        else if (this == CashAppPayBasisPoints) onCashAppPayBasisPoints();
        else if (this == CashAppPayFixed) onCashAppPayFixed();
        else if (this == ComplianceFormOverdueFixed) onComplianceFormOverdueFixed();
        else if (this == DinersClubBasisPoints) onDinersClubBasisPoints();
        else if (this == DinersClubFixed) onDinersClubFixed();
        else if (this == DinersClubInterchange) onDinersClubInterchange();
        else if (this == DiscoverBasisPoints) onDiscoverBasisPoints();
        else if (this == DiscoverDataUsageFixed) onDiscoverDataUsageFixed();
        else if (this == DiscoverExternallyFundedBasisPoints) onDiscoverExternallyFundedBasisPoints();
        else if (this == DiscoverExternallyFundedFixed) onDiscoverExternallyFundedFixed();
        else if (this == DiscoverFixed) onDiscoverFixed();
        else if (this == DiscoverInterchange) onDiscoverInterchange();
        else if (this == DiscoverNetworkAuthorizationFixed) onDiscoverNetworkAuthorizationFixed();
        else if (this == DisputeFixedFee) onDisputeFixedFee();
        else if (this == DisputeInquiryFixedFee) onDisputeInquiryFixedFee();
        else if (this == EftBasisPoints) onEftBasisPoints();
        else if (this == EftCreditReturnFixedFee) onEftCreditReturnFixedFee();
        else if (this == EftDebitReturnFixedFee) onEftDebitReturnFixedFee();
        else if (this == EftFixed) onEftFixed();
        else if (this == EftMaxFixed) onEftMaxFixed();
        else if (this == EftValidationPlaidFixed) onEftValidationPlaidFixed();
        else if (this == GrossMonthlyFeesAchBasisPoints) onGrossMonthlyFeesAchBasisPoints();
        else if (this == GrossMonthlyFeesAchFixed) onGrossMonthlyFeesAchFixed();
        else if (this == GrossMonthlyFeesCardBasisPoints) onGrossMonthlyFeesCardBasisPoints();
        else if (this == GrossMonthlyFeesCardFixed) onGrossMonthlyFeesCardFixed();
        else if (this == GrossMonthlyFeesEftBasisPoints) onGrossMonthlyFeesEftBasisPoints();
        else if (this == GrossMonthlyFeesEftFixed) onGrossMonthlyFeesEftFixed();
        else if (this == InteracBasisPoints) onInteracBasisPoints();
        else if (this == InteracFixed) onInteracFixed();
        else if (this == InvoiceAchBasisPoints) onInvoiceAchBasisPoints();
        else if (this == InvoiceAchFixed) onInvoiceAchFixed();
        else if (this == InvoiceAchMaxFixed) onInvoiceAchMaxFixed();
        else if (this == InvoiceCardBasisPoints) onInvoiceCardBasisPoints();
        else if (this == InvoiceCardFixed) onInvoiceCardFixed();
        else if (this == InvoiceEftBasisPoints) onInvoiceEftBasisPoints();
        else if (this == InvoiceEftFixed) onInvoiceEftFixed();
        else if (this == InvoiceEftMaxFixed) onInvoiceEftMaxFixed();
        else if (this == JcbBasisPoints) onJcbBasisPoints();
        else if (this == JcbFixed) onJcbFixed();
        else if (this == JcbInterchange) onJcbInterchange();
        else if (this == MastercardAcquirerFeeBasisPoints) onMastercardAcquirerFeeBasisPoints();
        else if (this == MastercardBasisPoints) onMastercardBasisPoints();
        else if (this == MastercardFixed) onMastercardFixed();
        else if (this == MastercardInterchange) onMastercardInterchange();
        else if (this == QualifiedTierBasisPointsFee) onQualifiedTierBasisPointsFee();
        else if (this == QualifiedTierFixedFee) onQualifiedTierFixedFee();
        else if (this == PaymentInstrumentTokenizationFixed) onPaymentInstrumentTokenizationFixed();
        else if (this == SettlementFundingTransferAchBasisPoints) onSettlementFundingTransferAchBasisPoints();
        else if (this ==
            SettlementFundingTransferAchCreditReturnFixed) onSettlementFundingTransferAchCreditReturnFixed();
        else if (this == SettlementFundingTransferAchDebitReturnFixed) onSettlementFundingTransferAchDebitReturnFixed();
        else if (this == SettlementFundingTransferAchFixed) onSettlementFundingTransferAchFixed();
        else if (this == SettlementFundingTransferAchMaxFixed) onSettlementFundingTransferAchMaxFixed();
        else if (this == SettlementFundingTransferEftBasisPoints) onSettlementFundingTransferEftBasisPoints();
        else if (this ==
            SettlementFundingTransferEftCreditReturnFixed) onSettlementFundingTransferEftCreditReturnFixed();
        else if (this == SettlementFundingTransferEftDebitReturnFixed) onSettlementFundingTransferEftDebitReturnFixed();
        else if (this == SettlementFundingTransferEftFixed) onSettlementFundingTransferEftFixed();
        else if (this == SettlementFundingTransferEftMaxFixed) onSettlementFundingTransferEftMaxFixed();
        else if (this ==
            SettlementFundingTransferInstantPayoutCardBasisPoints) onSettlementFundingTransferInstantPayoutCardBasisPoints();
        else if (this ==
            SettlementFundingTransferInstantPayoutCardFixed) onSettlementFundingTransferInstantPayoutCardFixed();
        else if (this ==
            SettlementFundingTransferInstantPayoutCardMaxFixed) onSettlementFundingTransferInstantPayoutCardMaxFixed();
        else if (this == SettlementFundingTransferNocCreditFixed) onSettlementFundingTransferNocCreditFixed();
        else if (this == SettlementFundingTransferNocDebitFixed) onSettlementFundingTransferNocDebitFixed();
        else if (this ==
            SettlementFundingTransferSameDayAchBasisPoints) onSettlementFundingTransferSameDayAchBasisPoints();
        else if (this == SettlementFundingTransferSameDayAchFixed) onSettlementFundingTransferSameDayAchFixed();
        else if (this == SettlementFundingTransferSameDayAchMaxFixed) onSettlementFundingTransferSameDayAchMaxFixed();
        else if (this == SubscriptionAchBasisPoints) onSubscriptionAchBasisPoints();
        else if (this == SubscriptionAchFixed) onSubscriptionAchFixed();
        else if (this == SubscriptionAchMaxFixed) onSubscriptionAchMaxFixed();
        else if (this == SubscriptionCardBasisPoints) onSubscriptionCardBasisPoints();
        else if (this == SubscriptionCardFixed) onSubscriptionCardFixed();
        else if (this == SubscriptionEftBasisPoints) onSubscriptionEftBasisPoints();
        else if (this == SubscriptionEftFixed) onSubscriptionEftFixed();
        else if (this == SubscriptionEftMaxFixed) onSubscriptionEftMaxFixed();
        else if (this == SupplementalFeeFixed) onSupplementalFeeFixed();
        else if (this == ThirdPartyGatewayCybersourceBasisPoints) onThirdPartyGatewayCybersourceBasisPoints();
        else if (this == ThirdPartyGatewayCybersourceFixed) onThirdPartyGatewayCybersourceFixed();
        else if (this == VisaAcquirerProcessingFixed) onVisaAcquirerProcessingFixed();
        else if (this == VisaBaseIiCreditVoucherFixed) onVisaBaseIiCreditVoucherFixed();
        else if (this == VisaBaseIiSystemFileTransmissionFixed) onVisaBaseIiSystemFileTransmissionFixed();
        else if (this == VisaBasisPoints) onVisaBasisPoints();
        else if (this == VisaCreditVoucherFixed) onVisaCreditVoucherFixed();
        else if (this == VisaFixed) onVisaFixed();
        else if (this == VisaInterchange) onVisaInterchange();
        else if (this == VisaKilobyteAccessFixed) onVisaKilobyteAccessFixed();
        else otherwise(Value);
    }
}
