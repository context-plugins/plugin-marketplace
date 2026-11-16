using System.Text.Json.Serialization;
using FinixApiReference.Core.Models;

namespace FinixApiReference.Models;

/// <summary>
/// Encrypted card data used to process the transaction.
/// </summary>
public record EmvData
{
    /// <summary>
    /// ID of the application used in the transaction. Tag 9F06 from the EMVCo standard.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("application_identifier")]
    public string? ApplicationIdentifier { get; init; }

    /// <summary>
    /// EMV application label. Tag 50 from the EMVCo standard.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("application_label")]
    public string? ApplicationLabel { get; init; }

    /// <summary>
    /// EMV application label with formatting (if provided). Tag 9F12 from the EMVCo standard.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("application_preferred_name")]
    public string? ApplicationPreferredName { get; init; }

    /// <summary>
    /// Transaction number for the EMV application. Tag 9F36 from the EMVCo standard.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("application_transaction_counter")]
    public string? ApplicationTransactionCounter { get; init; }

    /// <summary>
    /// Cryptogram returned by the card. Tag 9F26 of the EMVCo standard.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("cryptogram")]
    public string? Cryptogram { get; init; }

    /// <summary>
    /// The alphabet code table (according to ISO 8859) used by the EMV application (if provided). Tag 9F11.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("issuer_code_table_index")]
    public string? IssuerCodeTableIndex { get; init; }

    /// <summary>
    /// Whether the cardholder's PIN number was verified.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("pin_verified")]
    public bool? PinVerified { get; init; }

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
