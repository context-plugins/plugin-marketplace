using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;
using FinixApiReference.Core.Models;
using FinixApiReference.Models.AnyOf;
using FinixApiReference.Models.Enums;

namespace FinixApiReference.Models;

/// <summary>
/// A charge authorization
/// </summary>
public record Authorization
{
    /// <summary>
    /// The ID of the <c>Authorization</c> resource.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("id")]
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
    /// The redirect URL used for 3DS transactions (if supported by the processor).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("3ds_redirect_url")]
    public string? DsRedirectUrl3 { get; init; }

    /// <summary>
    /// Object detailing any additional lodging amounts included in the <c>Authorization</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("additional_lodging_data")]
    public AdditionalLodgingData? AdditionalLodgingData { get; init; }

    /// <summary>
    /// Object detailing any additional motor vehicle rental amounts included in the <c>Authorization</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("additional_motor_vehicle_rental_data")]
    public AdditionalMotorVehicleRentalData? AdditionalMotorVehicleRentalData { get; init; }

    /// <summary>
    /// Details about any <see href="/guides/online-payments/payment-features/buyer-charges">Buyer Charges</see> included in the <c>Authorization</c>. The buyer charges are mutually exclusive.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("additional_buyer_charges")]
    public AdditionalBuyerCharges? AdditionalBuyerCharges { get; init; }

    /// <summary>
    /// Object detailing any additional healthcare amounts included in the <c>Authorization</c>.
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
    /// Details the results of the Address Verification checks.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("address_verification")]
    public string? AddressVerification { get; init; }

    /// <summary>
    /// The total amount that will be debited in cents (e.g. 100 cents to debit $1.00).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("amount")]
    public long? Amount { get; init; }

    /// <summary>
    /// When <c>default_partial_authorization_enabled</c> is set to <b>true</b>, <c>amount_requested</c> indicates the amount the cardholder attempted to authorize.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("amount_requested")]
    public int? AmountRequested { get; init; }

    /// <summary>
    /// The ID of the <c>Application</c> resource the <c>Authorization</c> was created under.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("application")]
    public string? Application { get; init; }

    /// <summary>
    /// Details needed to process card present transactions.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("card_present_details")]
    public CardPresentDetails? CardPresentDetails { get; init; }

    /// <summary>
    /// An object that contains information about the credential on file authorization.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("credential_on_file")]
    public CredentialOnFile? CredentialOnFile { get; init; }

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
    /// The ID of the activated device.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("device")]
    public string? Device { get; init; }

    /// <summary>
    /// <c>Authorization</c> expiration time.
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
    /// ID of the buyer 'Identity' to run the card present authorization. Finix tokenizes the card associated with the provided 'Identity' and processes the authorization, removing the need to create a blank buyer <c>Identity</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("identity")]
    public string? Identity { get; init; }

    /// <summary>
    /// Pass any randomly generated or internal ID to <see href="/api/section/idempotent-requests">idempotently</see> identify <c>Transfers</c>, <c>Authorizations</c>, or refund requests.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("idempotency_id")]
    public string? IdempotencyId { get; init; }

    /// <summary>
    /// This field returns <c>null</c> for all users except <c>ROLE_PLATFORM</c> users.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("ip_address_details")]
    public IpAddressDetails? IpAddressDetails { get; init; }

    /// <summary>
    /// Whether the <c>Authorization</c> has been voided.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("is_void")]
    public bool? IsVoid { get; init; }

    /// <summary>
    /// The ID of the <c>Merchant</c> resource the <c>Authorization</c> was created under.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("merchant")]
    public string? Merchant { get; init; }

    /// <summary>
    /// The ID of the <c>Identity</c> resource used by the <c>Merchant</c> the <c>Authorization</c> was processed under.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("merchant_identity")]
    public string? MerchantIdentity { get; init; }

    /// <summary>
    /// Message field that provides additional details. This field is typically <b>null</b>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("messages")]
    public IReadOnlyList<string>? Messages { get; init; }

    /// <summary>
    /// Contains network-specific fields used by issuers to identify transactions.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("network_details")]
    public NetworkDetails? NetworkDetails { get; init; }

    /// <summary>
    /// Raw response from the processor.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("raw")]
    public Raw1? Raw { get; init; }

    /// <summary>
    /// Timestamp when the receipt was last printed.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("receipt_last_printed_at")]
    public DateTimeOffset? ReceiptLastPrintedAt { get; init; }

    /// <summary>
    /// Details the results of the Security Code Verification che
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("security_code_verification")]
    public string? SecurityCodeVerification { get; init; }

    /// <summary>
    /// ID of the <c>Payment Instrument</c> where funds get debited.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("source")]
    public string? Source { get; init; }

    /// <summary>
    /// The state of the <c>Authorization</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("state")]
    public State1? State { get; init; }

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

    /// <summary>
    /// Trace ID of the <c>Authorization</c>. The processor sends back the <c>trace_id</c> so you can track the authorization end-to-end.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("trace_id")]
    public string? TraceId { get; init; }

    /// <summary>
    /// The ID of the <c>transfer</c> resource that gets created when the <c>Authorization</c> moves to <b>SUCCEEDED</b>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("transfer")]
    public string? Transfer { get; init; }

    /// <summary>
    /// The state of the void attempt for the <c>Authorization</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("void_state")]
    public VoidState? VoidState { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("_links")]
    public Links1? Links { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
