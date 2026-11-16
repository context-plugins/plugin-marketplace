using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using FinixApiReference.Core.Models;
using FinixApiReference.Models.Enums;

namespace FinixApiReference.Models;

public record MerchantSchema
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
    /// ID of the <c>Application</c> associated with the resource.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("application")]
    [MinLength(1)]
    public string? Application { get; init; }

    /// <summary>
    /// Set to <c>true</c> to require the card's CVV code.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("card_cvv_required")]
    public bool? CardCvvRequired { get; init; }

    /// <summary>
    /// Set to <c>true</c> to require the card's expiration date.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("card_expiration_date_required")]
    public bool? CardExpirationDateRequired { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("card_network_details")]
    public object? CardNetworkDetails { get; init; }

    /// <summary>
    /// Set to <c>true</c> if you want to enable the <c>Merchant</c> to accept convenience fees and/or service fees.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("convenience_charges_enabled")]
    public bool? ConvenienceChargesEnabled { get; init; }

    /// <summary>
    /// The <c>Merchant</c>'s country.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("country")]
    public Country? Country { get; init; }

    /// <summary>
    /// Set to <c>true</c> to automatically create <c>Transfers</c> once settlement reports get generated.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("creating_transfer_from_report_enabled")]
    public bool? CreatingTransferFromReportEnabled { get; init; }

    /// <summary>
    /// ISO 4217 3-letter currency code.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("currencies")]
    public IReadOnlyList<Currency>? Currencies { get; init; }

    /// <summary>
    /// <list type="bullet">
    ///   <item><description>Set to <b>true</b> if you want to enable partial authorizations for a specific <c>Merchant</c>.</description></item>
    ///   <item><description>Partial authorizations enable the <c>Merchant</c> to collect a portion of the amount if the cardholder doesn't have the funds to cover the entire amount on their card.</description></item>
    /// </list>
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("default_partial_authorization_enabled")]
    public bool? DefaultPartialAuthorizationEnabled { get; init; } = false;

    /// <summary>
    /// Indicates whether standard ACH pull disbursements (debits) are enabled.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("disbursements_ach_pull_enabled")]
    public bool? DisbursementsAchPullEnabled { get; init; }

    /// <summary>
    /// Indicates whether standard ACH push disbursements (credits) are enabled.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("disbursements_ach_push_enabled")]
    public bool? DisbursementsAchPushEnabled { get; init; }

    /// <summary>
    /// Indicates whether card pull disbursements are enabled.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("disbursements_card_pull_enabled")]
    public bool? DisbursementsCardPullEnabled { get; init; }

    /// <summary>
    /// Indicates whether card push disbursements are enabled.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("disbursements_card_push_enabled")]
    public bool? DisbursementsCardPushEnabled { get; init; }

    /// <summary>
    /// Indicates whether same-day ACH pull disbursements (debits) are enabled, allowing funds to be withdrawn from an account via same-day ACH transfer.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("disbursements_same_day_ach_pull_enabled")]
    public bool? DisbursementsSameDayAchPullEnabled { get; init; }

    /// <summary>
    /// Indicates whether same-day ACH push disbursements (credits) are enabled, allowing funds to be sent to an account via same-day ACH transfer.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("disbursements_same_day_ach_push_enabled")]
    public bool? DisbursementsSameDayAchPushEnabled { get; init; }

    /// <summary>
    /// Details how the <c>Merchant</c> settles fees.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("fee_ready_to_settle_upon")]
    public FeeReadyToSettleUpon? FeeReadyToSettleUpon { get; init; }

    /// <summary>
    /// This field shows the timestamp when the <c>Merchant</c> was first approved. If the <c>Merchant</c> has not been approved yet, the value is <c>null</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("first_approved_at")]
    public DateTimeOffset? FirstApprovedAt { get; init; }

    /// <summary>
    /// The <c>Merchant</c> payment gateway.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("gateway")]
    public string? Gateway { get; init; }

    /// <summary>
    /// Set to <c>true</c> to enable gross settlements.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("gross_settlement_enabled")]
    public bool? GrossSettlementEnabled { get; init; }

    /// <summary>
    /// The ID of the <c>Identity</c> resource associated with the <c>Merchant</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("identity")]
    public string? Identity { get; init; }

    /// <summary>
    /// Set to <c>true</c> if you want to allow the merchant to be enabled for settlement instant payouts.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("instant_payouts_card_push_enabled")]
    public bool? InstantPayoutsCardPushEnabled { get; init; } = false;

    /// <summary>
    /// Set to <c>true</c> to terminate the <c>Merchant</c>. A merchant can only be terminated if its current <c>onboarding_state</c> is <c>APPROVED</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("is_terminated")]
    public bool? IsTerminated { get; init; }

    /// <summary>
    /// Set to <c>true</c> to enable the <c>Merchant</c> for Level 2 and Level 3 processing. Default value is <c>false</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("level_two_level_three_data_enabled")]
    public bool? LevelTwoLevelThreeDataEnabled { get; init; }

    /// <summary>
    /// Whether the merchant is able to support loan repayment on the card networks.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("loan_repayment")]
    public bool? LoanRepayment { get; init; } = false;

    /// <summary>
    /// The Merchant Category Code (<see href="http://www.dm.usda.gov/procurement/card/card\_x/mcc.pdf">MCC</see>) that this merchant will be classified under. For a list of approved MCCs, see <see href="/guides/managing-operations/security-compliance/approved-merchant-category-codes">Approved Merchant Category Codes.</see>
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("mcc")]
    public string? Mcc { get; init; }

    /// <summary>
    /// The legal name saved in the <c>Merchant</c> resource.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("merchant_name")]
    public string? MerchantName { get; init; }

    /// <summary>
    /// Details if a merchant's info was submitted to third-party processors for provisioning.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("merchant_profile")]
    public string? MerchantProfile { get; init; }

    /// <summary>
    /// Whether microdeposit verification is required for buyers.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("microdeposit_verification_required_buyer")]
    public bool? MicrodepositVerificationRequiredBuyer { get; init; }

    /// <summary>
    /// Whether microdeposit verification is required for senders.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("microdeposit_verification_required_sender")]
    public bool? MicrodepositVerificationRequiredSender { get; init; }

    /// <summary>
    /// Whether Finix emails the bank account owner when a microdeposit verification is created.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("microdeposit_verification_send_email_enabled")]
    public bool? MicrodepositVerificationSendEmailEnabled { get; init; }

    /// <summary>
    /// MID of the <c>Merchant</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("mid")]
    public string? Mid { get; init; }

    /// <summary>
    /// Details the state of the <c>Merchant's</c> onboarding.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("onboarding_state")]
    public OnboardingState? OnboardingState { get; init; }

    /// <summary>
    /// Details if transaction processing is enabled for the <c>Merchant</c>. <c>ROLE_PARTNER</c> can only set this value to <c>false</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("processing_enabled")]
    public bool? ProcessingEnabled { get; init; }

    /// <summary>
    /// Name of the transaction processor.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("processor")]
    public Processor1? Processor { get; init; }

    /// <summary>
    /// Additional details specific to the processor.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("processor_details")]
    public ProcessorDetails? ProcessorDetails { get; init; }

    /// <summary>
    /// The strategy used to hold refunds for this <c>Merchant</c>. Refunds stay in <c>PENDING</c> until the merchant's settlement balance covers them. For more information, see <see href="/guides/after-the-payment/refunds/pending-refunds">Pending refunds</see>.
    /// <para>
    /// <c>ROLE_PARTNER</c> credentials can set the following strategies:
    /// - <c>SEVEN_DAY_DELAYED_ADJUSTMENT</c>: Refunds are held in <c>PENDING</c> for up to 7 days to be covered by settlement funds. After 7 days, Finix debits the merchant's bank account to cover the refund.
    /// - <c>SAME_DAY_ADJUSTMENT</c>: Finix issues a debit adjustment near settlement close if the settlement can't cover the refund.
    /// </para>
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("pending_refunds_strategy")]
    public PendingRefundsStrategy? PendingRefundsStrategy { get; init; }

    /// <summary>
    /// Details how transactions captured by the <c>Merchant</c> are settled.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("ready_to_settle_upon")]
    public ReadyToSettleUpon? ReadyToSettleUpon { get; init; }

    /// <summary>
    /// Indicates whether transaction settlement should be delayed to synchronize the timing of all transactions, including both card and ACH, ensuring they are settled together.
    /// <para>
    /// Possible values include:
    /// </para>
    /// <list type="bullet">
    ///   <item><description><c>ACH</c> - Align all transactions to match the timing of ACH settlements, so card transactions settle at the same speed as ACH transactions.</description></item>
    ///   <item><description><c>NONE</c> - Default behavior where card transactions settle the next day (T+1) and ACH transactions settle two days later (T+2).</description></item>
    /// </list>
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("ready_to_settle_upon_delay_alignment")]
    public ReadyToSettleUponDelayAlignment? ReadyToSettleUponDelayAlignment { get; init; }

    /// <summary>
    /// A value of <c>true</c> disables refunds for the <c>Merchant</c>, including both referenced and unreferenced refunds.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("refunds_disabled")]
    public bool? RefundsDisabled { get; init; } = false;

    /// <summary>
    /// Set to <c>true</c> if you want to enable a <c>Merchant</c> to accept rent charges.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("rent_surcharges_enabled")]
    public bool? RentSurchargesEnabled { get; init; }

    /// <summary>
    /// Details if settlement approvals are enabled for the <c>Merchant</c>. <c>ROLE_PARTNER</c> can only set this value to false.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("settlement_enabled")]
    public bool? SettlementEnabled { get; init; }

    /// <summary>
    /// Includes additional information (like the MID or <c>Merchant</c> name) when submitting funding <c>Transfers</c> to processors.
    /// - <c>UNSET</c>: No additional details get provided to the processor.
    /// - <c>MID_AND_DATE</c>: The <c>MID</c> of the <c>Merchant</c> and the date the funding <c>Transfer</c> was submitted (Date is in UTC). e.g <c>MID:12345678-20220225</c>
    /// - <c>MID_AND_MERCHANT_NAME</c>: The <c>MID</c> of the <c>Merchant</c> and the <c>Merchant#name</c> (white spaces will be removed). e.g. <c>MID:12345678-NameOfMerchant</c>
    /// <para>
    /// These details appear alongside the seller's payout in their bank account as a description of the deposit.
    /// </para>
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("settlement_funding_identifier")]
    public SettlementFundingIdentifier? SettlementFundingIdentifier { get; init; } = SettlementFundingIdentifier.Unset;

    /// <summary>
    /// If <c>settlement_queue_mode</c> is set to <c>MANUAL</c>, Finix will automatically place all transactions (Sales, Fees, Refunds, and ACH Returns) into a settlement queue that you can manage. Each transaction will have a <c>Settlement Queue Entry</c>.
    /// <para>
    /// When a <c>Settlement Queue Entry</c> is created, it will not be placed into <c>Settlement</c> until the <c>Settlement Queue Entry</c> is explicitly released.
    /// </para>
    /// <para>
    /// Note: We require the release of all settlement queue entries within 30 days of creation.
    /// </para>
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("settlement_queue_mode")]
    public SettlementQueueMode? SettlementQueueMode { get; init; }

    /// <summary>
    /// Set to <c>true</c> if you want to enable a <c>Merchant</c> to accept surcharge fees. For more details, see <see href="/guides/online-payments/payment-features/buyer-charges">Buyer Charges</see>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("surcharges_enabled")]
    public bool? SurchargesEnabled { get; init; } = false;

    /// <summary>
    /// Include up to 50 <c>key: value</c> pairs to annotate requests with custom metadata.
    /// - Maximum character length for individual <c>keys</c> is 40.
    /// - Maximum character length for individual <c>values</c> is 500.
    /// (For example, <c>order_number: 25</c>, <c>item_type: produce</c>, <c>department: sales</c>)
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("tags")]
    public object? Tags { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("termination_details")]
    public TerminationDetails? TerminationDetails { get; init; }

    /// <summary>
    /// Indicates if the merchant is allowed to process unreferenced refunds initiated through card-present transactions on Finix terminals.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("unreferenced_refund_card_present_enabled")]
    public bool? UnreferencedRefundCardPresentEnabled { get; init; }

    /// <summary>
    /// Indicates if merchant is allowed to process unreferenced refunds initiated through manual card entry on Finix terminals.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("unreferenced_refund_manual_entry_enabled")]
    public bool? UnreferencedRefundManualEntryEnabled { get; init; } = false;

    /// <summary>
    /// ID of the <c>Verification</c> that was submitted to verify the <c>Merchant</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("verification")]
    public string? Verification { get; init; }

    /// <summary>
    /// For your convenience, every response includes several URLs which link to resources relevant to the request. You can use these <c>_links</c> to make your follow-up requests and quickly access relevant IDs.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("_links")]
    public Links14? Links { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
