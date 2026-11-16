using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using FinixApiReference.Core.Models;
using FinixApiReference.Models.AnyOf;
using FinixApiReference.Models.Enums;

namespace FinixApiReference.Models;

public record Transfer
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
    /// The ID of the <c>3D Secure Session</c> that authenticated the buyer. This field is <c>null</c> when the payment was not authenticated with a <c>3D Secure Session</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("3d_secure_session")]
    public string? DSecureSession3 { get; init; }

    /// <summary>
    /// Details about any <see href="../../../../guides/online-payments/payment-features/buyer-charges">Buyer Charges</see> included in the <c>Transfer</c>. The buyer charges are mutually exclusive.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("additional_buyer_charges")]
    public AdditionalBuyerCharges? AdditionalBuyerCharges { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("additional_healthcare_data")]
    public AdditionalHealthcareData? AdditionalHealthcareData { get; init; }

    /// <summary>
    /// Contains lodging-specific fields for <c>Authorization</c> and <c>Transfer</c> requests. Optional for lodging MCC transactions (MCC 3501–3999, 7011). Returns <c>null</c> for all other transactions.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("additional_lodging_data")]
    public AdditionalLodgingData? AdditionalLodgingData { get; init; }

    /// <summary>
    /// Contains motor vehicle rental-specific fields for <c>Authorization</c> and <c>Transfer</c> requests. Optional for motor vehicle rental MCC transactions (MCC 3351–3500, 7512). Returns <c>null</c> for all other transactions.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("additional_motor_vehicle_rental_data")]
    public AdditionalMotorVehicleRentalData? AdditionalMotorVehicleRentalData { get; init; }

    /// <summary>
    /// Additional information about the purchase used for <see href="/guides/online-payments/payment-features/level-2-level-3-processing">Level 2 and Level 3 Processing</see>. Please note that Visa is ending its Level 2 offering in April 2026.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("additional_purchase_data")]
    public AdditionalPurchaseData? AdditionalPurchaseData { get; init; }

    /// <summary>
    /// Details the results of the address verification checks.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("address_verification")]
    public AddressVerification2? AddressVerification { get; init; }

    /// <summary>
    /// The total amount that will be debited in cents (e.g. 100 cents to debit $1.00).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("amount")]
    public long? Amount { get; init; }

    /// <summary>
    /// The <c>amount</c> that was requested to get debited from the <c>source</c> when the transaction was created, in cents (e.g., <c>100</c> = $1.00).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("amount_requested")]
    public long? AmountRequested { get; init; }

    /// <summary>
    /// ID of the <c>Application</c> associated with the resource.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("application")]
    [MinLength(1)]
    public string? Application { get; init; }

    /// <summary>
    /// Details about a transfer that was returned and was unable to be processed. Only present when <c>state</c> is <c>RETURNED</c>
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("bank_return_details")]
    public BankReturnDetails? BankReturnDetails { get; init; }

    /// <summary>
    /// Details needed to process card present transactions.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("card_present_details")]
    public CardPresentDetails1? CardPresentDetails { get; init; }

    /// <summary>
    /// ISO 4217 3-letter currency code.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("currency")]
    public Currency? Currency { get; init; }

    /// <summary>
    /// Gives more information about the product flow that was used to create the resource. Finix retains the right to add additional enums for this field without it being a breaking change.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("created_via")]
    public CreatedViaTransfersAuthorizations? CreatedVia { get; init; } = CreatedViaTransfersAuthorizations.Unknown;

    /// <summary>
    /// ID of the <c>Payment Instrument</c> where funds will be sent.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("destination")]
    public string? Destination { get; init; }

    /// <summary>
    /// The ID of the <c>Device</c> resource the <c>Transfer</c> was created under.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("device")]
    public string? Device { get; init; }

    /// <summary>
    /// Details if the <c>Transfer</c> will be settled externally by card processors.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("externally_funded")]
    public string? ExternallyFunded { get; init; }

    /// <summary>
    /// The timestamp indicating when a held refund expires. Only returned for reversals created with refund holds enabled. A refund that can't be covered by this time fails with <c>failure_code: REFUND_EXPIRED</c>. For more information, see <see href="/guides/after-the-payment/refunds/pending-refunds">Pending refunds</see>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("expires_at")]
    public DateTimeOffset? ExpiresAt { get; init; }

    /// <summary>
    /// The code of the failure so the decline can be handled programmatically. For more info on how to handle the failure, see <see href="/additional-resources/developers/implementation-and-testing/failure-codes">Failure Codes</see>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("failure_code")]
    public string? FailureCode { get; init; }

    /// <summary>
    /// A human-readable description of why the transaction was declined. This will also include a suggestion on how to complete the payment.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("failure_message")]
    public string? FailureMessage { get; init; }

    /// <summary>
    /// The minimum amount of the <c>Transfer</c> you'd like to collect as your fee in cents. Defaults to zero (must be less than or equal to the <c>amount</c>).
    /// - If the fees applied by the 'Fee Profile' are <b>*higher</b>* than the value passed in 'fee', 'fee' will not be applied and have no effect.
    /// - If the fees applied by the 'Fee Profile' are <b>*lower</b>* than the value passed in 'fee', an additional fee is be applied, in addition to the fees generated by the <c>Fee Profile</c>.
    ///     - The additional fee is equal to the difference between the value passed in 'fee' and the fees generated by the <c>Fee Profile</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("fee")]
    public long? Fee { get; init; }

    /// <summary>
    /// The ID of the <c>Fee Profile</c> that will be used for calculating fees for this transfer.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("fee_profile")]
    public string? FeeProfile { get; init; }

    /// <summary>
    /// The type of disbursement to perform. Defaults to <c>GENERAL_PAYOUT</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("funds_flow_type")]
    public FundsFlowType? FundsFlowType { get; init; }

    /// <summary>
    /// Pass any randomly generated or internal ID to <see href="/api/section/idempotent-requests">idempotently</see> identify <c>Transfers</c>, <c>Authorizations</c>, or refund requests.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("idempotency_id")]
    public string? IdempotencyId { get; init; }

    /// <summary>
    /// Always returns <c>null</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("ip_address_details")]
    public object? IpAddressDetails { get; init; }

    /// <summary>
    /// The ID of the <c>Merchant</c> resource the <c>Transfer</c> was created under.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("merchant")]
    public string? Merchant { get; init; }

    /// <summary>
    /// The ID of <c>Identity</c> resource used by the <c>Merchant</c> the <c>Transfer</c> was created under.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("merchant_identity")]
    public string? MerchantIdentity { get; init; }

    /// <summary>
    /// A list of messages that provides additional details.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("messages")]
    public IReadOnlyList<string>? Messages { get; init; }

    /// <summary>
    /// Contains network-specific fields used by issuers to identify transactions.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("network_details")]
    public NetworkDetails2? NetworkDetails { get; init; }

    /// <summary>
    /// The operation performed in the transaction. <c>REFUND_MERCHANT_DEBIT_ADJUSTMENT</c> and <c>REFUND_MERCHANT_CREDIT_ADJUSTMENT</c> are created by Finix for <see href="/guides/after-the-payment/refunds/pending-refunds">refund holds</see> and cannot be passed in requests.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("operation_key")]
    public OperationKey2? OperationKey { get; init; }

    /// <summary>
    /// ID of the original parent <c>Transfer</c>. Only present when <c>type</c> is <c>REVERSAL</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("parent_transfer")]
    public string? ParentTransfer { get; init; }

    /// <summary>
    /// The <c>trace_id</c> of the original parent <c>Transfer</c>. Only present when <c>type</c> is <c>REVERSAL</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("parent_transfer_trace_id")]
    public string? ParentTransferTraceId { get; init; }

    /// <summary>
    /// The timestamp of when the <c>Transfer</c> was processed.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("processed_at")]
    public DateTimeOffset? ProcessedAt { get; init; }

    /// <summary>
    /// The ID of the corresponding pull <c>Transfer</c> linked in a <c>ME_TO_ME</c> transaction.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("pull_transfer_id")]
    public string? PullTransferId { get; init; }

    /// <summary>
    /// Raw response from the processor.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("raw")]
    public Raw1? Raw { get; init; }

    /// <summary>
    /// The timestamp indicating when the <c>Transfer</c> is ready to be settled.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("ready_to_settle_at")]
    public DateTimeOffset? ReadyToSettleAt { get; init; }

    /// <summary>
    /// Timestamp when the receipt was last printed.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("receipt_last_printed_at")]
    public DateTimeOffset? ReceiptLastPrintedAt { get; init; }

    /// <summary>
    /// Details the results of the Card Verification Code check.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("security_code_verification")]
    public SecurityCodeVerification? SecurityCodeVerification { get; init; }

    /// <summary>
    /// The ID of the <c>Payment Instrument</c> that will be debited and performing the <c>Transfer</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("source")]
    public string? Source { get; init; }

    /// <summary>
    /// Array containing the resource IDs of the <c>Split Transfers</c> generated from the <c>Transfer</c>.
    /// <para>
    /// For standard split transactions, this contains IDs of <c>Split Transfers</c> created from the parent <c>Transfer</c>.
    /// </para>
    /// <para>
    /// For <see href="/api/disputes/listdisputesadjustments">dispute adjustment transfers</see> on split transactions:
    /// - When a <c>MERCHANT_DEBIT</c> or <c>MERCHANT_CREDIT</c> adjustment <c>Transfer</c> is created for a <see href="/api/disputes">Dispute</see> on a split transaction, this array contains the IDs of <c>Split Transfers</c> created for each participant.
    /// - The <c>Split Transfers</c> are created proportionally based on each merchant's share of the original sale.
    /// </para>
    /// <para>
    /// For more information, see <see href="../../../../guides/online-payments/payment-features/split-transactions#disputes">Split Transactions - Disputes</see>.
    /// </para>
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("split_transfers")]
    public IReadOnlyList<string>? SplitTransfers { get; init; }

    /// <summary>
    /// The status of the <c>Transfer</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("state")]
    public State11? State { get; init; }

    /// <summary>
    /// The description of the <c>Merchant</c> that appears on the buyer's bank or card statement.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("statement_descriptor")]
    [MaxLength(20)]
    public string? StatementDescriptor { get; init; }

    /// <summary>
    /// Additional information describing the <c>payment_type</c>.
    /// <para>
    /// For <see href="/api/disputes/listdisputesadjustments">dispute adjustment transfers</see> (<c>type: DISPUTE</c>):
    /// - <c>MERCHANT_DEBIT</c>: Funds are pulled from the merchant(s) when a chargeback occurs. For split transactions, this creates <c>Split Transfers</c> with <c>type: DISPUTE_MERCHANT_DEBIT</c>.
    /// - <c>MERCHANT_CREDIT</c>: Funds are returned to the merchant(s) when a <c>Dispute</c> is ruled in their favor. For split transactions, this creates <c>Split Transfers</c> with <c>type: DISPUTE_MERCHANT_CREDIT</c>.
    /// </para>
    /// <para>
    /// For <see href="/guides/after-the-payment/refunds/pending-refunds">refund hold</see> adjustment transfers:
    /// - <c>REFUND_MERCHANT_DEBIT_ADJUSTMENT</c>: Funds are pulled from the merchant to cover a held refund.
    /// - <c>REFUND_MERCHANT_CREDIT_ADJUSTMENT</c>: Funds are returned to the merchant when the held refund is submitted or expires.
    /// </para>
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("subtype")]
    public Subtype2? Subtype { get; init; }

    /// <summary>
    /// Amount in cents for which an additional fee will be created in addition to any fees created from the assigned fee profile.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("supplemental_fee")]
    public string? SupplementalFee { get; init; }

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
    /// The tip amount included in the total amount.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("tip_amount")]
    public int? TipAmount { get; init; }

    /// <summary>
    /// Trace ID of the <c>Transfer</c>. The processor sends back the <c>trace_id</c> so you can track the <c>Transfer</c> end-to-end.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("trace_id")]
    public string? TraceId { get; init; }

    /// <summary>
    /// Type of <c>Transfer</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("type")]
    public Type31? Type { get; init; }

    /// <summary>
    /// Details about the third-party processor associated with the <c>Transfer</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("third_party_details")]
    public ThirdPartyDetails? ThirdPartyDetails { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("_links")]
    public Links24? Links { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
