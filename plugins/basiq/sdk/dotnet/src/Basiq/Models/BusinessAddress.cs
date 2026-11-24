using System.Text.Json.Serialization;
using Basiq.Core.Models;

namespace Basiq.Models;

public record BusinessAddress
{
    /// <summary>
    /// The first line of the business address.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("addressLine1")]
    public string? AddressLine1 { get; init; }

    /// <summary>
    /// Additional information about the business address (optional).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("addressLine2")]
    public string? AddressLine2 { get; init; }

    /// <summary>
    /// The suburb or locality where the business is located.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("suburb")]
    public string? Suburb { get; init; }

    /// <summary>
    /// The state or territory where the business is located.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("state")]
    public string? State { get; init; }

    /// <summary>
    /// The postal code of the business location.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("postcode")]
    public string? Postcode { get; init; }

    /// <summary>
    /// The country code of the business location.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("countryCode")]
    public string? CountryCode { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
