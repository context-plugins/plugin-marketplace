using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;

namespace DoiT.Models;

public record GeographicAccessCountry
{
    /// <summary>
    /// Canonical ISO 3166-1 alpha-2 country code.
    /// </summary>
    [JsonPropertyName("countryCode")]
    [RegularExpression("^[A-Z]{2}$")]
    public required string CountryCode { get; init; }

    /// <summary>
    /// Canonical English display name.
    /// </summary>
    [JsonPropertyName("name")]
    public required string Name { get; init; }
}
