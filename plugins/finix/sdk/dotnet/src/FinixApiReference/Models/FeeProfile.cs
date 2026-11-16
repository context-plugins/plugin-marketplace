using System;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using FinixApiReference.Core.Models;
using FinixApiReference.Core.Validation.Attributes;
using FinixApiReference.Models.Enums;

namespace FinixApiReference.Models;

public record FeeProfile
{
    /// <summary>
    /// The ID of the resource.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("id")]
    [MinLength(1)]
    public string? Id { get; init; }

    /// <summary>
    /// Timestamp of when the object was created.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("created_at")]
    public DateTimeOffset? CreatedAt { get; init; }

    /// <summary>
    /// Timestamp of when the object was last updated.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("updated_at")]
    public DateTimeOffset? UpdatedAt { get; init; }

    /// <summary>
    /// Maximum ACH basis points fee (in cents) incurred for each individual <c>Transfer</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("ach_basis_points_fee_limit")]
    public int? AchBasisPointsFeeLimit { get; init; }

    /// <summary>
    /// Percentage-based fee incurred against the full amount of an eCheck (also called ACH payments). Calculated as one hundredth of one percent (1 basis point = .0001 or .01%).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("ach_basis_points")]
    public int? AchBasisPoints { get; init; }

    /// <summary>
    /// A fixed amount (in cents) that will be charged to the seller for receiving an ACH Credit Return.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("ach_credit_return_fixed_fee")]
    public int? AchCreditReturnFixedFee { get; init; }

    /// <summary>
    /// A fixed amount (in cents) that will be charged to the seller for receiving an ACH Debit Return.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("ach_debit_return_fixed_fee")]
    public int? AchDebitReturnFixedFee { get; init; }

    /// <summary>
    /// Fee in cents incurred for each individual <c>Transfer</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("ach_fixed_fee")]
    public int? AchFixedFee { get; init; }

    /// <summary>
    /// The amount in cents charged as a fixed fee for processing ACH credit transactions that result in a Notice of Change (NOC).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("ach_notice_of_change_credit_fixed_fee")]
    public int? AchNoticeOfChangeCreditFixedFee { get; init; }

    /// <summary>
    /// Represents the fixed fee in cents for processing ACH debit transactions that generate a Notice of Change (NOC).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("ach_notice_of_change_debit_fixed_fee")]
    public int? AchNoticeOfChangeDebitFixedFee { get; init; }

    /// <summary>
    /// Fee in cents charged when a USD bank account <c>Payment Instrument</c> is created using Plaid.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("ach_validation_plaid_fixed_fee")]
    public int? AchValidationPlaidFixedFee { get; init; }

    /// <summary>
    /// Percentage-based fee incurred against the full amount of each Afterpay Transfer. Calculated as one hundredth of one percent (1 basis point = .0001 or .01%).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("afterpay_basis_points")]
    public int? AfterpayBasisPoints { get; init; }

    /// <summary>
    /// Fee in cents incurred for each individual Afterpay Transfer.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("afterpay_fixed_fee")]
    public int? AfterpayFixedFee { get; init; }

    /// <summary>
    /// Applies to gross American Express card volume.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("american_express_assessment_basis_points")]
    public int? AmericanExpressAssessmentBasisPoints { get; init; }

    /// <summary>
    /// Percentage-based fee incurred against the full amount of each American Express Transfer. Calculated as one hundredth of one percent (1 basis point = .0001 or .01%).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("american_express_basis_points")]
    public int? AmericanExpressBasisPoints { get; init; }

    /// <summary>
    /// A fee associated with American Express's assessment of dues or ongoing charges for services provided through the American Express payment network.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("american_express_charge_dues_assessments")]
    public int? AmericanExpressChargeDuesAssessments { get; init; }

    /// <summary>
    /// Set to <c>true</c> to incur interchange fees for American Express <c>Transfers</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("american_express_charge_interchange")]
    public bool? AmericanExpressChargeInterchange { get; init; }

    /// <summary>
    /// Percentage-based fee incurred against the full amount of each American Express externally funded <c>Transfer</c>. Calculated as one hundredth of one percent (1 basis point = .0001 or .01%).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("american_express_externally_funded_basis_points")]
    public int? AmericanExpressExternallyFundedBasisPoints { get; init; }

    /// <summary>
    /// Fee in cents incurred for each individual American Express externally funded <c>Transfer</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("american_express_externally_funded_fixed_fee")]
    public int? AmericanExpressExternallyFundedFixedFee { get; init; }

    /// <summary>
    /// Fee in cents incurred for each individual American Express <c>Transfer</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("american_express_fixed_fee")]
    public int? AmericanExpressFixedFee { get; init; }

    /// <summary>
    /// An additional fixed fee that can be charged per <c>Transfer</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("ancillary_fixed_fee_primary")]
    public int? AncillaryFixedFeePrimary { get; init; }

    /// <summary>
    /// An additional fixed fee that can be charged per <c>Transfer</c> if <c>ancillary_fixed_fee_primary</c> is included.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("ancillary_fixed_fee_secondary")]
    public int? AncillaryFixedFeeSecondary { get; init; }

    /// <summary>
    /// ID of the <c>Application</c> the resource was created under.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("application")]
    [MinLength(1)]
    public string? Application { get; init; }

    /// <summary>
    /// Percentage-based fee incurred against the full amount of each card-based <c>Transfer</c>. Calculated as one hundredth of one percent (1 basis point = .0001 or .01%).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("basis_points")]
    public int? BasisPoints { get; init; }

    /// <summary>
    /// Fee in cents incurred for each 3D Secure Session created.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("card_3d_secure_fixed_fee")]
    public int? Card3DSecureFixedFee { get; init; }

    /// <summary>
    /// Fee in cents charged per card update received through the Account Updater service. Applies across all card networks.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("card_account_updater_fixed_fee")]
    public int? CardAccountUpdaterFixedFee { get; init; }

    /// <summary>
    /// Percentage-based fee charged against the full amount of every <c>Transfer</c> that includes non-US cards. Calculated as one hundredth of one percent (1 basis point = .0001 or .01%).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("card_cross_border_basis_points")]
    public int? CardCrossBorderBasisPoints { get; init; }

    /// <summary>
    /// Fee in cents charged against every <c>Transfer</c> that includes non-US cards.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("card_cross_border_fixed_fee")]
    public int? CardCrossBorderFixedFee { get; init; }

    /// <summary>
    /// Fee in cents charged when verifying the name on a <c>Payment Instrument</c> via a <c>PUT</c> on a Payment Instrument or a <c>POST</c> on verifications.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("card_name_verification_fixed_fee")]
    public int? CardNameVerificationFixedFee { get; init; }

    /// <summary>
    /// Fee in cents charged per network token successfully created. Supported on Visa and Mastercard only.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("card_network_token_fixed_fee")]
    public int? CardNetworkTokenFixedFee { get; init; }

    /// <summary>
    /// Percentage-based fee incurred against the full amount of each Cash App Pay Transfer. Calculated as one hundredth of one percent (1 basis point = .0001 or .01%).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("cash_app_pay_basis_points")]
    public int? CashAppPayBasisPoints { get; init; }

    /// <summary>
    /// Fee in cents incurred for each individual Cash App Pay Transfer.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("cash_app_pay_fixed_fee")]
    public int? CashAppPayFixedFee { get; init; }

    /// <summary>
    /// Set to <c>true</c> to charge the fixed fee on authorizations that fail, are voided, or expire. Captured authorizations are charged using the basis points and fixed fees already on the Fee Profile.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("charge_all_authorization_requests")]
    public bool? ChargeAllAuthorizationRequests { get; init; }

    /// <summary>
    /// Set to <c>true</c> to charge the fixed fee on refunds, both successful and failed. Includes bank reversals.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("charge_all_reversal_requests")]
    public bool? ChargeAllReversalRequests { get; init; }

    /// <summary>
    /// Set to <c>true</c> to charge the fixed fee on failed sales and captures. Successful sales and captures are always charged the fixed fee.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("charge_all_transfer_requests")]
    public bool? ChargeAllTransferRequests { get; init; }

    /// <summary>
    /// Whether to pass the dues and assessment fees levied by all applicable card brands (e.g., American Express, Discover, Visa, Mastercard).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("charge_dues_assessments")]
    public bool? ChargeDuesAssessments { get; init; }

    /// <summary>
    /// Set to <b>True</b> to incur interchange fees for card-based <c>Transfers</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("charge_interchange")]
    public bool? ChargeInterchange { get; init; }

    /// <summary>
    /// Fee in cents charged for an overdue compliance form.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("compliance_forms_overdue_fixed_fee")]
    public int? ComplianceFormsOverdueFixedFee { get; init; }

    /// <summary>
    /// Percentage-based fee incurred against the full amount of each Diners <c>Transfer</c>. Calculated as one hundredth of one percent (1 basis point = .0001 or .01%).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("diners_club_basis_points")]
    public int? DinersClubBasisPoints { get; init; }

    /// <summary>
    /// Set to <c>true</c> to incur interchange fees for Diners <c>Transfers</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("diners_club_charge_interchange")]
    public bool? DinersClubChargeInterchange { get; init; }

    /// <summary>
    /// Fee in cents incurred for each individual Diners <c>Transfer</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("diners_club_fixed_fee")]
    public int? DinersClubFixedFee { get; init; }

    /// <summary>
    /// An assessment that applies to gross Discover card transaction volume.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("discover_assessments_basis_points")]
    public int? DiscoverAssessmentsBasisPoints { get; init; }

    /// <summary>
    /// Percentage-based fee incurred against the full amount of each Discover Transfer. Calculated as one hundredth of one percent (1 basis point = .0001 or .01%).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("discover_basis_points")]
    public int? DiscoverBasisPoints { get; init; }

    /// <summary>
    /// A fee associated with Discover's assessment of dues or ongoing charges for services provided through the Discover payment network.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("discover_charge_dues_assessments")]
    public int? DiscoverChargeDuesAssessments { get; init; }

    /// <summary>
    /// Set to <c>true</c> to incur interchange fees for Discover <c>Transfers</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("discover_charge_interchange")]
    public bool? DiscoverChargeInterchange { get; init; }

    /// <summary>
    /// Applies to all U.S.-based authorization transactions.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("discover_data_usage_fixed_fee")]
    public int? DiscoverDataUsageFixedFee { get; init; }

    /// <summary>
    /// Percentage-based fee incurred against the full amount of each Discover externally funded <c>Transfer</c>. Calculated as one hundredth of one percent (1 basis point = .0001 or .01%).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("discover_externally_funded_basis_points")]
    public int? DiscoverExternallyFundedBasisPoints { get; init; }

    /// <summary>
    /// Fee in cents incurred for each individual Discover externally funded <c>Transfer</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("discover_externally_funded_fixed_fee")]
    public int? DiscoverExternallyFundedFixedFee { get; init; }

    /// <summary>
    /// Fee in cents incurred for each individual Discover <c>Transfer</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("discover_fixed_fee")]
    public int? DiscoverFixedFee { get; init; }

    /// <summary>
    /// This fee will apply to all Discover network authorizations and will replace the previously assessed Data Transmission.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("discover_network_authorization_fixed_fee")]
    public int? DiscoverNetworkAuthorizationFixedFee { get; init; }

    /// <summary>
    /// Fee applied when a <c>Dispute</c> is created or updated to a <c>PENDING</c> state.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("dispute_fixed_fee")]
    public int? DisputeFixedFee { get; init; }

    /// <summary>
    /// Fee applied when a <c>Dispute</c> is created or updated to a <c>PENDING</c> state.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("dispute_inquiry_fixed_fee")]
    public int? DisputeInquiryFixedFee { get; init; }

    /// <summary>
    /// The maximum percentage-based fee (in cents) incurred for each individual <c>Transfer</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("eft_basis_points_fee_limit")]
    public int? EftBasisPointsFeeLimit { get; init; }

    /// <summary>
    /// The percentage-based fee applied to the total amount of an EFT sale. Measured in basis points, where 1 basis point equals 0.01% (e.g., 100 basis points = 1%).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("eft_basis_points")]
    public int? EftBasisPoints { get; init; }

    /// <summary>
    /// A fixed fee (in cents) charged to the merchant for processing an EFT credit return.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("eft_credit_return_fixed_fee")]
    public int? EftCreditReturnFixedFee { get; init; }

    /// <summary>
    /// A fixed fee (in cents) charged to the seller for processing an EFT debit return.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("eft_debit_return_fixed_fee")]
    public int? EftDebitReturnFixedFee { get; init; }

    /// <summary>
    /// A flat fee (in cents) incurred for each individual <c>Transfer</c> made from an EFT sale.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("eft_fixed_fee")]
    public int? EftFixedFee { get; init; }

    /// <summary>
    /// Fee in cents charged when a CAD bank account <c>Payment Instrument</c> is created using Plaid.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("eft_validation_plaid_fixed_fee")]
    public int? EftValidationPlaidFixedFee { get; init; }

    /// <summary>
    /// The percentage-based fee applied to the total amount of each externally funded <c>Transfer</c>. Measured in basis points, where 1 basis point equals 0.01%.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("externally_funded_basis_points")]
    public int? ExternallyFundedBasisPoints { get; init; }

    /// <summary>
    /// A fixed fee (in cents) incurred for each individual externally funded <c>Transfer</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("externally_funded_fixed_fee")]
    public int? ExternallyFundedFixedFee { get; init; }

    /// <summary>
    /// Fee in cents incurred for each individual card-based <c>Transfer</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("fixed_fee")]
    public int? FixedFee { get; init; }

    /// <summary>
    /// The total amount of ACH (eCheck) basis point fees charged over a month.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("gross_monthly_fees_ach_basis_points")]
    public int? GrossMonthlyFeesAchBasisPoints { get; init; }

    /// <summary>
    /// The total amount of ACH (eCheck) fixed fees charged over a month.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("gross_monthly_fees_ach_fixed_fee")]
    public int? GrossMonthlyFeesAchFixedFee { get; init; }

    /// <summary>
    /// The total amount of card basis point fees charged over a month.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("gross_monthly_fees_card_basis_points")]
    public int? GrossMonthlyFeesCardBasisPoints { get; init; }

    /// <summary>
    /// The total amount of card fixed fees charged over a month.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("gross_monthly_fees_card_fixed_fee")]
    public int? GrossMonthlyFeesCardFixedFee { get; init; }

    /// <summary>
    /// The total amount of EFT basis point fees charged over a month.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("gross_monthly_fees_eft_basis_points")]
    public int? GrossMonthlyFeesEftBasisPoints { get; init; }

    /// <summary>
    /// The total amount of EFT fixed fees charged over a month.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("gross_monthly_fees_eft_fixed_fee")]
    public int? GrossMonthlyFeesEftFixedFee { get; init; }

    /// <summary>
    /// Percentage-based fee incurred against the full amount of each Interac Transfer. Calculated as one hundredth of one percent (1 basis point = .0001 or .01%).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("interac_basis_points")]
    public int? InteracBasisPoints { get; init; }

    /// <summary>
    /// Fee in cents incurred for each individual Interac <c>Transfer</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("interac_fixed_fee")]
    public int? InteracFixedFee { get; init; }

    /// <summary>
    /// Percentage-based fee incurred against the full amount of each ACH <c>Transfer</c> created when a buyer pays an <c>Invoice</c>. Calculated as one hundredth of one percent (1 basis point = .0001 or .01%).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("invoice_ach_basis_points")]
    public int? InvoiceAchBasisPoints { get; init; }

    /// <summary>
    /// Maximum ACH basis points fee (in cents) incurred for each individual <c>Transfer</c> created when a buyer pays an <c>Invoice</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("invoice_ach_basis_points_fee_limit")]
    public int? InvoiceAchBasisPointsFeeLimit { get; init; }

    /// <summary>
    /// A flat fee (in cents) incurred for each individual ACH <c>Transfer</c> created when a buyer pays an <c>Invoice</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("invoice_ach_fixed_fee")]
    public int? InvoiceAchFixedFee { get; init; }

    /// <summary>
    /// Percentage-based fee incurred against the full amount of each card-based <c>Transfer</c> created when a buyer pays an <c>Invoice</c>. Calculated as one hundredth of one percent (1 basis point = .0001 or .01%).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("invoice_card_basis_points")]
    public int? InvoiceCardBasisPoints { get; init; }

    /// <summary>
    /// A flat fee (in cents) incurred for each individual card-based <c>Transfer</c> created when a buyer pays an <c>Invoice</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("invoice_card_fixed_fee")]
    public int? InvoiceCardFixedFee { get; init; }

    /// <summary>
    /// Percentage-based fee incurred against the full amount of each EFT <c>Transfer</c> created when a buyer pays an <c>Invoice</c>. Calculated as one hundredth of one percent (1 basis point = .0001 or .01%).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("invoice_eft_basis_points")]
    public int? InvoiceEftBasisPoints { get; init; }

    /// <summary>
    /// Maximum EFT basis points fee (in cents) incurred for each individual <c>Transfer</c> created when a buyer pays an <c>Invoice</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("invoice_eft_basis_points_fee_limit")]
    public int? InvoiceEftBasisPointsFeeLimit { get; init; }

    /// <summary>
    /// A flat fee (in cents) incurred for each individual EFT <c>Transfer</c> created when a buyer pays an <c>Invoice</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("invoice_eft_fixed_fee")]
    public int? InvoiceEftFixedFee { get; init; }

    /// <summary>
    /// Percentage-based fee incurred against the full amount of each JCB Transfer. Calculated as one hundredth of one percent (1 basis point = .0001 or .01%).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("jcb_basis_points")]
    public int? JcbBasisPoints { get; init; }

    /// <summary>
    /// Set to <c>true</c> to incur interchange fees for JCB <c>Transfers</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("jcb_charge_interchange")]
    public bool? JcbChargeInterchange { get; init; }

    /// <summary>
    /// Fee in cents incurred for each individual JCB <c>Transfer</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("jcb_fixed_fee")]
    public int? JcbFixedFee { get; init; }

    /// <summary>
    /// A fee assessed on a business’s gross MasterCard processing volume. This fee varies per acquirer based on MasterCard’s assessed charge as it’s distributed across the acquirer’s portfolio of merchants. Generally, this fee is a fraction of a basis point. For example, 0.0045%, 0.0075%, etc. are examples of a likely fee.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("mastercard_acquirer_fees_basis_points")]
    public int? MastercardAcquirerFeesBasisPoints { get; init; }

    /// <summary>
    /// Fee applied to Mastercard credit sale transactions greater than $1,000.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("mastercard_assessments_over1k_basis_points")]
    public int? MastercardAssessmentsOver1KBasisPoints { get; init; }

    /// <summary>
    /// Fee applied to Mastercard transactions less than or equal to $1,000.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("mastercard_assessments_under1k_basis_points")]
    public int? MastercardAssessmentsUnder1KBasisPoints { get; init; }

    /// <summary>
    /// Percentage-based fee incurred against the full amount of each MasterCard <c>Transfer</c>. Calculated as one hundredth of one percent (1 basis point = .0001 or .01%).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("mastercard_basis_points")]
    public int? MastercardBasisPoints { get; init; }

    /// <summary>
    /// A fee associated with MasterCard's assessment of dues or ongoing charges for services provided through the MasterCard payment network.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("mastercard_charge_dues_assessments")]
    public int? MastercardChargeDuesAssessments { get; init; }

    /// <summary>
    /// Set to <c>true</c> to incur interchange fees for MasterCard <c>Transfers</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("mastercard_charge_interchange")]
    public bool? MastercardChargeInterchange { get; init; }

    /// <summary>
    /// Fee in cents incurred for each individual MasterCard <c>Transfer</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("mastercard_fixed_fee")]
    public int? MastercardFixedFee { get; init; }

    /// <summary>
    /// A fee in cents charged when Finix tokenizes a <c>Payment Instrument</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("payment_instrument_tokenization_fixed_fee")]
    public int? PaymentInstrumentTokenizationFixedFee { get; init; }

    /// <summary>
    /// The top of the qualified tier tree.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("qualified_tiers")]
    public object? QualifiedTiers { get; init; }

    /// <summary>
    /// Day of the month (<c>1</c> through <c>31</c>) that <c>recurring_monthly_fixed_fee</c> is charged. If the configured day exceeds the number of days in a given month, the fee is charged on the last day of that month.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("recurring_monthly_fixed_cycle_day")]
    [Minimum(1)]
    [Maximum(31)]
    public int? RecurringMonthlyFixedCycleDay { get; init; }

    /// <summary>
    /// A monthly recurring fee (in cents) that allows the passthrough of fees to sub-merchants on a monthly cadence. The fee is charged on the day of the month set by <c>recurring_monthly_fixed_cycle_day</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("recurring_monthly_fixed_fee")]
    public int? RecurringMonthlyFixedFee { get; init; }

    /// <summary>
    /// Day of the month (<c>1</c> through <c>31</c>) that <c>recurring_yearly_fixed_fee</c> is charged, within the month set by <c>recurring_yearly_fixed_cycle_month</c>. If the configured day exceeds the number of days in that month, the fee is charged on the last day of that month.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("recurring_yearly_fixed_cycle_day")]
    [Minimum(1)]
    [Maximum(31)]
    public int? RecurringYearlyFixedCycleDay { get; init; }

    /// <summary>
    /// Month of the year (<c>1</c> through <c>12</c>) that <c>recurring_yearly_fixed_fee</c> is charged. Used together with <c>recurring_yearly_fixed_cycle_day</c> to determine the yearly charge date.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("recurring_yearly_fixed_cycle_month")]
    [Minimum(1)]
    [Maximum(12)]
    public int? RecurringYearlyFixedCycleMonth { get; init; }

    /// <summary>
    /// A yearly recurring fee (in cents) that allows the passthrough of fees to sub-merchants on a yearly cadence. The fee is charged on the date set by <c>recurring_yearly_fixed_cycle_month</c> and <c>recurring_yearly_fixed_cycle_day</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("recurring_yearly_fixed_fee")]
    public int? RecurringYearlyFixedFee { get; init; }

    /// <summary>
    /// Set to <c>AGGREGATE</c> to round after the settlement calculation. By default, rounding happens before the sum of the settlement calculation (i.e., round each fee transfer).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("rounding_mode")]
    public RoundingMode? RoundingMode { get; init; }

    /// <summary>
    /// The maximum percentage-based fee (in cents) incurred for each individual Settlement Funding Transfer (ACH).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("settlement_funding_transfer_ach_basis_points_fee_limit")]
    public int? SettlementFundingTransferAchBasisPointsFeeLimit { get; init; }

    /// <summary>
    /// A percentage-based fee applied to ACH transfers related to settlement funding. Calculated as one hundredth of one percent (1 basis point = .0001 or .01%).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("settlement_funding_transfer_ach_basis_points")]
    public int? SettlementFundingTransferAchBasisPoints { get; init; }

    /// <summary>
    /// A fixed fee (in cents) charged to the platform or seller when receiving a credit return related to a Settlement Funding Transfer (ACH).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("settlement_funding_transfer_ach_credit_return_fixed_fee")]
    public int? SettlementFundingTransferAchCreditReturnFixedFee { get; init; }

    /// <summary>
    /// A fixed fee (in cents) charged to the platform or seller when receiving a Debit Return related to a Settlement Funding Transfer (ACH).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("settlement_funding_transfer_ach_debit_return_fixed_fee")]
    public int? SettlementFundingTransferAchDebitReturnFixedFee { get; init; }

    /// <summary>
    /// A flat fee (in cents) incurred for each individual Settlement Funding Transfer (ACH).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("settlement_funding_transfer_ach_fixed_fee")]
    public int? SettlementFundingTransferAchFixedFee { get; init; }

    /// <summary>
    /// The maximum percentage-based fee (in cents) incurred for each individual settlement funding <c>Transfer</c> made via an EFT.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("settlement_funding_transfer_eft_basis_points_fee_limit")]
    public int? SettlementFundingTransferEftBasisPointsFeeLimit { get; init; }

    /// <summary>
    /// The percentage-based fee applied to the total amount of a settlement funding <c>Transfer</c> made via an EFT from a Canadian-based bank account. Measured in basis points, where 1 basis point equals 0.01% (e.g., 100 basis points = 1%).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("settlement_funding_transfer_eft_basis_points")]
    public int? SettlementFundingTransferEftBasisPoints { get; init; }

    /// <summary>
    /// A fixed fee (in cents) charged for processing a Credit Return related to a settlement funding <c>Transfer</c>. This occurs when funds are returned from a Canadian-based bank account back to the seller's account via EFT.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("settlement_funding_transfer_eft_credit_return_fixed_fee")]
    public int? SettlementFundingTransferEftCreditReturnFixedFee { get; init; }

    /// <summary>
    /// A fixed fee (in cents) charged for processing a Debit Return related to a settlement funding <c>Transfer</c>. This occurs when funds are returned from the seller's account to a Canadian-based bank account via EFT due to a payment failure or reversal.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("settlement_funding_transfer_eft_debit_return_fixed_fee")]
    public int? SettlementFundingTransferEftDebitReturnFixedFee { get; init; }

    /// <summary>
    /// A flat fee (in cents) incurred for each settlement funding <c>Transfer</c> made via an EFT from a Canadian-based bank account. This fee is independent of the payment amount.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("settlement_funding_transfer_eft_fixed_fee")]
    public int? SettlementFundingTransferEftFixedFee { get; init; }

    /// <summary>
    /// The maximum percentage-based fee (in cents) incurred for each individual settlement funding <c>Transfer</c> made as an instant payout to a card.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("settlement_funding_transfer_instant_payout_card_basis_points_fee_limit")]
    public int? SettlementFundingTransferInstantPayoutCardBasisPointsFeeLimit { get; init; }

    /// <summary>
    /// The percentage-based fee applied to the total amount of a settlement funding <c>Transfer</c> made as an instant payout to a card. Measured in basis points, where 1 basis point equals 0.01% (e.g., 100 basis points = 1%).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("settlement_funding_transfer_instant_payout_card_basis_points")]
    public int? SettlementFundingTransferInstantPayoutCardBasisPoints { get; init; }

    /// <summary>
    /// A flat fee (in cents) incurred for each settlement funding <c>Transfer</c> made as an instant payout to a card.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("settlement_funding_transfer_instant_payout_card_fixed_fee")]
    public int? SettlementFundingTransferInstantPayoutCardFixedFee { get; init; }

    /// <summary>
    /// A fixed fee (in cents) charged for processing a Notification of Change (NOC) related to a credit transaction in settlement funding transfers.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("settlement_funding_transfer_noc_credit_fixed_fee")]
    public int? SettlementFundingTransferNocCreditFixedFee { get; init; }

    /// <summary>
    /// A fixed fee (in cents) charged for processing a Notification of Change (NOC) related to a debit transaction in settlement funding transfers.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("settlement_funding_transfer_noc_debit_fixed_fee")]
    public int? SettlementFundingTransferNocDebitFixedFee { get; init; }

    /// <summary>
    /// The maximum percentage-based fee (in cents) incurred for each individual settlement funding <c>Transfer</c> made via same-day ACH.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("settlement_funding_transfer_same_day_ach_basis_points_fee_limit")]
    public int? SettlementFundingTransferSameDayAchBasisPointsFeeLimit { get; init; }

    /// <summary>
    /// Percentage-based fee incurred against the full amount of a settlement funding <c>Transfer</c> made via same-day ACH. Calculated as one hundredth of one percent (1 basis point = .0001 or .01%).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("settlement_funding_transfer_same_day_ach_basis_points")]
    public int? SettlementFundingTransferSameDayAchBasisPoints { get; init; }

    /// <summary>
    /// A flat fee (in cents) incurred for each settlement funding <c>Transfer</c> made via same-day ACH.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("settlement_funding_transfer_same_day_ach_fixed_fee")]
    public int? SettlementFundingTransferSameDayAchFixedFee { get; init; }

    /// <summary>
    /// The percentage-based fee incurred against the full amount of each ACH Direct Debit transaction created from a <c>Subscription</c>. Calculated as one hundredth of one percent (1 basis point = .0001 or .01%).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("subscription_ach_basis_points")]
    public int? SubscriptionAchBasisPoints { get; init; }

    /// <summary>
    /// The maximum <c>subscription_ach_basis_points</c> fee (in cents) incurred for each individual <c>Transfer</c> created from a <c>Subscription</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("subscription_ach_basis_points_fee_limit")]
    public int? SubscriptionAchBasisPointsFeeLimit { get; init; }

    /// <summary>
    /// The fee in cents incurred for each individual ACH Direct Debit transaction created from a <c>Subscription</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("subscription_ach_fixed_fee")]
    public int? SubscriptionAchFixedFee { get; init; }

    /// <summary>
    /// The percentage-based fee incurred against the full amount of each card-based transaction created from a <c>Subscription</c>. Calculated as one hundredth of one percent (1 basis point = .0001 or .01%).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("subscription_card_basis_points")]
    public int? SubscriptionCardBasisPoints { get; init; }

    /// <summary>
    /// The percentage-based fee incurred against the full amount of each EFT transaction created from a <c>Subscription</c>. Calculated as one hundredth of one percent (1 basis point = .0001 or .01%).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("subscription_card_fixed_fee")]
    public int? SubscriptionCardFixedFee { get; init; }

    /// <summary>
    /// The percentage-based fee incurred against the full amount of each EFT transaction created from a <c>Subscription</c>. Calculated as one hundredth of one percent (1 basis point = .0001 or .01%).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("subscription_eft_basis_points")]
    public int? SubscriptionEftBasisPoints { get; init; }

    /// <summary>
    /// The maximum <c>subscription_eft_basis_points</c> fee (in cents) incurred for each individual <c>Transfer</c> created from a <c>Subscription</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("subscription_eft_basis_points_fee_limit")]
    public int? SubscriptionEftBasisPointsFeeLimit { get; init; }

    /// <summary>
    /// The fee in cents incurred for each individual EFT transaction created from a <c>Subscription</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("subscription_eft_fixed_fee")]
    public int? SubscriptionEftFixedFee { get; init; }

    /// <summary>
    /// The amount to charge for an iOS and Android Tap to Pay transaction in basis points.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("tap_to_pay_basis_points")]
    public int? TapToPayBasisPoints { get; init; }

    /// <summary>
    /// The fixed amount in cents to charge for an iOS and Android Tap to Pay transaction.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("tap_to_pay_fixed_fee")]
    public int? TapToPayFixedFee { get; init; }

    /// <summary>
    /// Percentage-based fee incurred against the full amount of each Transfer processed through the CyberSource gateway. Calculated as one hundredth of one percent (1 basis point = .0001 or .01%).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("third_party_gateway_cybersource_basis_points")]
    public int? ThirdPartyGatewayCybersourceBasisPoints { get; init; }

    /// <summary>
    /// Fee in cents incurred for each Transfer processed through the CyberSource gateway.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("third_party_gateway_cybersource_fixed_fee")]
    public int? ThirdPartyGatewayCybersourceFixedFee { get; init; }

    /// <summary>
    /// Applies to all U.S.-based credit card authorizations acquired in the U.S., regardless of where the issuer/cardholder is located. If your business is based in the U.S., the acquirer processing fee will apply to all Visa credit card authorizations.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("visa_acquirer_processing_fixed_fee")]
    public int? VisaAcquirerProcessingFixedFee { get; init; }

    /// <summary>
    /// Applies to all Visa credit transactions.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("visa_assessments_basis_points")]
    public int? VisaAssessmentsBasisPoints { get; init; }

    /// <summary>
    /// Applies to all U.S.-based refunds.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("visa_base_II_credit_voucher_fixed_fee")]
    public int? VisaBaseIiCreditVoucherFixedFee { get; init; }

    /// <summary>
    /// Applies to all Visa transactions and is charged in addition to other transaction-based assessments.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("visa_base_II_system_file_transmission_fixed_fee")]
    public int? VisaBaseIiSystemFileTransmissionFixedFee { get; init; }

    /// <summary>
    /// Percentage-based fee incurred against the full amount of each Visa <c>Transfer</c>. Calculated as one hundredth of one percent (1 basis point = .0001 or .01%)
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("visa_basis_points")]
    public int? VisaBasisPoints { get; init; }

    /// <summary>
    /// A fee associated with Visa's assessment of dues or ongoing charges for services provided through the Visa payment network.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("visa_charge_dues_assessments")]
    public int? VisaChargeDuesAssessments { get; init; }

    /// <summary>
    /// Set to <c>true</c> to incur interchange fees for Visa <c>Transfers</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("visa_charge_interchange")]
    public bool? VisaChargeInterchange { get; init; }

    /// <summary>
    /// Applies to Visa refunds.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("visa_credit_voucher_fixed_fee")]
    public int? VisaCreditVoucherFixedFee { get; init; }

    /// <summary>
    /// Fee in cents incurred for each individual Visa <c>Transfer</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("visa_fixed_fee")]
    public int? VisaFixedFee { get; init; }

    /// <summary>
    /// Charged on each authorization transaction submitted to Visa’s network for settlement.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("visa_kilobyte_access_fixed_fee")]
    public int? VisaKilobyteAccessFixedFee { get; init; }

    /// <summary>
    /// Include up to 50 <c>key: value</c> pairs to annotate requests with custom metadata.
    /// - Maximum character length for individual <c>keys</c> is 40.
    /// - Maximum character length for individual <c>values</c> is 500.
    /// (For example, <c>order_number: 25</c>, <c>item_type: produce</c>, <c>department: sales</c>)
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("tags")]
    public object? Tags { get; init; }

    /// <summary>
    /// For your convenience, every response includes several URLs which link to resources relevant to the request. You can use these <c>_links</c> to make your follow-up requests and quickly access relevant IDs.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("_links")]
    public Links10? Links { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
