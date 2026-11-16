using System.Text.Json.Serialization;
using FinixApiReference.Core.Models;

namespace FinixApiReference.Models;

/// <summary>
/// Contains network-specific fields used by issuers to identify transactions.
/// </summary>
public record NetworkDetails2
{
    /// <summary>
    /// Card brand associated with the saved payment instrument.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("brand")]
    public string? Brand { get; init; }

    /// <summary>
    /// Code returned by the issuing bank when a transaction is authorized.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("authorization_code")]
    public string? AuthorizationCode { get; init; }

    /// <summary>
    /// Unique identifier banks use to trace chargebacks or refunds. Available only for Mastercard transactions; otherwise returns <c>null</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("acquirer_reference_number")]
    public string? AcquirerReferenceNumber { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
