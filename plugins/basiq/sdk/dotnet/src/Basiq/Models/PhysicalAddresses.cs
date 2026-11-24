using System.Text.Json.Serialization;
using Basiq.Core.Models;

namespace Basiq.Models;

/// <summary>
/// User physical addresses holding the connection.
/// </summary>
public record PhysicalAddresses
{
    /// <summary>
    /// User address.
    /// </summary>
    [JsonPropertyName("addressLine1")]
    public required string AddressLine1 { get; init; }

    /// <summary>
    /// Always "null"
    /// </summary>
    [JsonPropertyName("addressLine2")]
    public required string? AddressLine2 { get; init; }

    /// <summary>
    /// Always "null"
    /// </summary>
    [JsonPropertyName("addressLine3")]
    public required string? AddressLine3 { get; init; }

    /// <summary>
    /// City
    /// </summary>
    [JsonPropertyName("city")]
    public required string City { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("country")]
    public string? Country { get; init; }

    /// <summary>
    /// Country code
    /// </summary>
    [JsonPropertyName("countryCode")]
    public required string CountryCode { get; init; }

    /// <summary>
    /// Address formatted.
    /// </summary>
    [JsonPropertyName("formattedAddress")]
    public required string FormattedAddress { get; init; }

    /// <summary>
    /// Post code
    /// </summary>
    [JsonPropertyName("postcode")]
    public required string Postcode { get; init; }

    /// <summary>
    /// State
    /// </summary>
    [JsonPropertyName("state")]
    public required string State { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
