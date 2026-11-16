using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using FinixApiReference.Core.Models;
using FinixApiReference.Models.Enums;

namespace FinixApiReference.Models;

public record TransferAllFields
{
    /// <summary>
    /// The 3D secure information required to create a 3D secure <c>Transfer.</c>
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("3d_secure_authentication")]
    public DSecureAuthentication3? DSecureAuthentication3 { get; init; }

    /// <summary>
    /// Details about any <see href="/guides/online-payments/payment-features/buyer-charges">Buyer Charges</see> included in the <c>Transfer</c>. The buyer charges are mutually exclusive.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("additional_buyer_charges")]
    public AdditionalBuyerCharges? AdditionalBuyerCharges { get; init; }

    /// <summary>
    /// Additional information about the purchase used for <see href="/guides/online-payments/payment-features/level-2-level-3-processing">Level 2 and Level 3 Processing</see>. Please note that Visa is ending its Level 2 offering in April 2026.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("additional_purchase_data")]
    public AdditionalPurchaseData? AdditionalPurchaseData { get; init; }

    /// <summary>
    /// The total amount that will be debited in cents (e.g. 100 cents to debit $1.00).
    /// </summary>
    [JsonPropertyName("amount")]
    public required long Amount { get; init; }

    /// <summary>
    /// Indicates that this transaction uses stored payment credentials (credential-on-file), meaning the cardholder previously authorized the merchant to save and reuse their payment details.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("credential_on_file")]
    public CredentialOnFile3? CredentialOnFile { get; init; }

    /// <summary>
    /// ISO 4217 3-letter currency code.
    /// </summary>
    [JsonPropertyName("currency")]
    public required Currency Currency { get; init; }

    /// <summary>
    /// ID of the <c>Payment Instrument</c> where funds will be sent. This field is only applicable to card or bank payouts.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("destination")]
    public string? Destination { get; init; }

    /// <summary>
    /// The unique identifier of the activated device. This field is only applicable to card-present payments.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("device")]
    public string? Device { get; init; }

    /// <summary>
    /// Optional field to specify which fee_profile to use for this <c>Transfer</c>. If not provided, the currently assigned <c>Fee Profile</c> will be used.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("fee_profile")]
    public string? FeeProfile { get; init; }

    /// <summary>
    /// Pass any randomly generated or internal ID to <see href="/api/section/idempotent-requests">idempotently</see> identify <c>Transfers</c>, <c>Authorizations</c>, or refund requests.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("idempotency_id")]
    public string? IdempotencyId { get; init; }

    /// <summary>
    /// The ID of the buyer <c>Identity</c> to run the card present sale. Finix tokenizes the card associated with the provided <c>Identity</c> and processes the sale, removing the need to create a blank buyer <c>Identity</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("identity")]
    public string? Identity { get; init; }

    /// <summary>
    /// The card brands require the customer's IP address for online gaming clients. Only supports Internet Protocol version 4 (IPv4).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("ip_address_v4")]
    public string? IpAddressV4 { get; init; }

    /// <summary>
    /// The ID of the <c>Merchant</c> under which to create the <c>Transfer</c>.
    /// </summary>
    [JsonPropertyName("merchant")]
    public required string? Merchant { get; init; }

    /// <summary>
    /// Details the operation that is be performed in the transaction.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("operation_key")]
    public OperationKey3? OperationKey { get; init; }

    /// <summary>
    /// <list type="bullet">
    ///   <item><description>Set to <c>true</c> if you want to enable partial authorizations for a specific transaction.</description></item>
    ///   <item><description>If <c>partial_authorization</c> is enabled for an individual transaction, the <c>Merchant</c> value for <c>default_partial_authorization_enabled</c> is disregarded.</description></item>
    ///   <item><description>Partial authorizations enable you to collect a portion of the amount if the cardholder does not have the funds to cover the entire amount.</description></item>
    /// </list>
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("partial_authorization")]
    public bool? PartialAuthorization { get; init; }

    /// <summary>
    /// If provided, the information will be used to generate a receipt if the transaction is successful. These settings are used only for receipts via devices.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("receipt_options")]
    public ReceiptOptions2? ReceiptOptions { get; init; }

    /// <summary>
    /// The 3-or 4-digit security code for the card (i.e., the CVV code). While providing a CVV is optional, it is recommended to include it wherever possible to prevent fraud.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("security_code")]
    public string? SecurityCode { get; init; }

    /// <summary>
    /// ID of the <c>Payment Instrument</c> where funds get debited.
    /// </summary>
    [JsonPropertyName("source")]
    public required string Source { get; init; }

    /// <summary>
    /// <list type="bullet">
    ///   <item><description>An array used to detail how funds from the <c>Transfer</c> will split and the amount <c>Merchants</c> receive.</description></item>
    ///   <item><description>The combined <c>amounts</c> under <c>split_transfers</c> must be equal to the <c>amount</c> submitted in the parent <c>Transfer.</c></description></item>
    ///   <item><description>For more information, see <see href="/guides/online-payments/payment-features/split-transactions">Split Transactions</see>.</description></item>
    /// </list>
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("split_transfers")]
    public IReadOnlyList<SplitTransfer2?>? SplitTransfers { get; init; }

    /// <summary>
    /// The description of the <c>Merchant</c> that appears on the card statement.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("statement_descriptor")]
    [MaxLength(20)]
    public string? StatementDescriptor { get; init; }

    /// <summary>
    /// Amount in cents for which an additional fee will be created in addition to any fees created from the assigned fee profile.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("supplemental_fee")]
    public long? SupplementalFee { get; init; }

    /// <summary>
    /// Include up to 50 <c>key: value</c> pairs to annotate requests with custom metadata.
    /// - Maximum character length for individual <c>keys</c> is 40.
    /// - Maximum character length for individual <c>values</c> is 500.
    /// (For example, <c>order_number: 25</c>, <c>item_type: produce</c>, <c>department: sales</c>)
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("tags")]
    public object? Tags { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
