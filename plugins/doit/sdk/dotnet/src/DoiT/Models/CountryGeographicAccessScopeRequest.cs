using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;

namespace DoiT.Models;

public record CountryGeographicAccessScopeRequest
{
    /// <summary>
    /// Access is limited to one canonical country.
    /// </summary>
    [JsonPropertyName("type")]
    public string Type { get; } = "country";

    /// <summary>
    /// ISO 3166-1 alpha-2 country code, canonicalized by the service.
    /// </summary>
    [JsonPropertyName("countryCode")]
    [RegularExpression("^[A-Z]{2}$")]
    public required string CountryCode { get; init; }
}
