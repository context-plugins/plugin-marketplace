using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using FinixApiReference.Core.Models;
using FinixApiReference.Models.Enums;

namespace FinixApiReference.Models;

public record AuthorizationLodging
{
    /// <summary>
    /// Object containing lodging-specific fields for the <c>Authorization</c>. Optional for lodging MCC transactions (MCC 3501–3999, 7011).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("additional_lodging_data")]
    public AdditionalLodgingData? AdditionalLodgingData { get; init; }

    /// <summary>
    /// The 3D secure information required to create a 3D secure <c>Authorization.</c>
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("3d_secure_authentication")]
    public DSecureAuthentication3? DSecureAuthentication3 { get; init; }

    /// <summary>
    /// Details about any <see href="/guides/online-payments/payment-features/buyer-charges">Buyer Charges</see> included in the <c>Authorization</c>. The buyer charges are mutually exclusive.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("additional_buyer_charges")]
    public AdditionalBuyerCharges? AdditionalBuyerCharges { get; init; }

    /// <summary>
    /// Object detailing any additional healthcare amounts included in the <c>Authorization</c>. Only available for USA merchants. Only non-healthcare merchant category codes (MCCs) are required to pass in additional healthcare data and have the necessary SIGIS certification.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("additional_healthcare_data")]
    public AdditionalHealthcareData? AdditionalHealthcareData { get; init; }

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
    /// An object that contains information about the credential on file transfer.
    /// <list type="bullet">
    ///   <item><description><c>type</c>: The type of credential on file transfer. Must be one of the following values:
    ///     <list type="bullet">
    ///       <item><description><c>RECURRING</c>: A transfer that is part of a series of transfers scheduled at regular intervals. Interchange benefits for <c>RECURRING</c> transactions are available only to approved bill payment merchants in the telecommunications and cable industries (MCC 4814 and 4899).</description></item>
    ///       <item><description><c>UNSCHEDULED</c>: A merchant-initiated, one-time transaction using stored credentials, triggered when specific conditions in a cardholder agreement are met—not on a fixed schedule.</description></item>
    ///     </list>
    ///   </description></item>
    /// </list>
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("credential_on_file")]
    public CredentialOnFile1? CredentialOnFile { get; init; }

    /// <summary>
    /// ISO 4217 3-letter currency code.
    /// </summary>
    [JsonPropertyName("currency")]
    public required Currency Currency { get; init; }

    /// <summary>
    /// The ID of the <c>Device</c> that the <c>Authorization</c> was created under.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("device")]
    public string? Device { get; init; }

    /// <summary>
    /// Pass any randomly generated or internal ID to <see href="/api/section/idempotent-requests">idempotently</see> identify <c>Transfers</c>, <c>Authorizations</c>, or refund requests.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("idempotency_id")]
    public string? IdempotencyId { get; init; }

    /// <summary>
    /// The ID of the buyer <c>Identity</c> to run the card present authorization. Finix tokenizes the card associated with the provided <c>Identity</c> and processes the authorization, removing the need to create a blank buyer <c>Identity</c>.
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
    /// The ID of the <c>Merchant</c> that the <c>Authorization</c> was created under.
    /// </summary>
    [JsonPropertyName("merchant")]
    public required string Merchant { get; init; }

    /// <summary>
    /// Details the operation that's performed in the authorization.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("operation_key")]
    public OperationKey4? OperationKey { get; init; }

    /// <summary>
    /// Partial authorizations let you collect part of the amount if the cardholder lacks funds for the full amount. Set to <c>true</c> to enable partial authorizations for a transaction. If <c>partial_authorization</c> is enabled, the <c>Merchant</c> value for <c>default_partial_authorization_enabled</c> is ignored.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("partial_authorization")]
    public bool? PartialAuthorization { get; init; }

    /// <summary>
    /// If provided the information will be used to generate a receipt if transaction is successful.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("receipt_options")]
    public ReceiptOptions? ReceiptOptions { get; init; }

    /// <summary>
    /// The 3-4 digit security code for the card (i.e. CVV code). Include the CVV code of the card to include <see href="/guides/online-payments/fraud-and-risk/risk-rules-card-checks">Card Verification Checks</see> with the created <c>Authorization</c>.
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
    /// The description of the <c>Merchant</c> that appears on the card statement.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("statement_descriptor")]
    [MaxLength(20)]
    public string? StatementDescriptor { get; init; }

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
