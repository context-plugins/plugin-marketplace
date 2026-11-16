using System;
using System.Text.Json.Serialization;
using FinixApiReference.Core.Models;
using FinixApiReference.Models.Enums;

namespace FinixApiReference.Models;

public record InstrumentHistoryEntry
{
    /// <summary>
    /// The ID of the <c>Instrument History Entry</c> resource.
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
    /// A label indicating the type of update applied to the <c>Payment Instrument</c>. The following enums are possible:
    /// <list type="bullet">
    ///   <item><description><c>CONTACT_CARDHOLDER</c>: The cardholder has opted out of the service. Please get in touch with the cardholder to acquire up-to-date card information.</description></item>
    ///   <item><description><c>FRAUD_REPORTED</c>: Fraud was reported by the <c>Merchant</c>.</description></item>
    ///   <item><description><c>NUMBER_AND_EXPIRATION_UPDATED</c>: Both the card number and expiry date changed.</description></item>
    ///   <item><description><c>NUMBER_UPDATED</c>: The card number has changed.</description></item>
    ///   <item><description><c>NOT_FOUND</c>: The issuing bank does not participate in account updater. This enumerator will only be returned once.</description></item>
    /// </list>
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("type")]
    public Type20? Type { get; init; }

    /// <summary>
    /// The ID of the <c>Application</c> under which the <c>Payment Instrument</c> was created, resulting in this <c>Instrument History Entry</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("application_id")]
    public string? ApplicationId { get; init; }

    /// <summary>
    /// The <c>Payment Instrument</c> that triggered the creation of this <c>Instrument History Entry</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("payment_instrument_id")]
    public string? PaymentInstrumentId { get; init; }

    /// <summary>
    /// The type of <c>Payment Instrument</c> that triggered this <c>Instrument History Entry</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("payment_instrument_type")]
    public PaymentInstrumentType? PaymentInstrumentType { get; init; }

    /// <summary>
    /// Object containing the <c>Payment Instrument</c> details prior to the card update.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("old_instrument_details")]
    public OldInstrumentDetails? OldInstrumentDetails { get; init; }

    /// <summary>
    /// Object containing the <c>Payment Instrument</c> details after the card update.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("new_instrument_details")]
    public NewInstrumentDetails? NewInstrumentDetails { get; init; }

    /// <summary>
    /// An object containing link(s) relevant to the request. You can store these links for follow-up requests.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("_links")]
    public Links19? Links { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
