using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using DoiT.Core.Models;

namespace DoiT.Models;

public record CountryGeographicAccessScope
{
    /// <summary>
    /// Access is limited to one canonical country.
    /// </summary>
    [JsonPropertyName("type")]
    public string Type { get; } = "country";

    /// <summary>
    /// Canonical ISO 3166-1 alpha-2 country code.
    /// </summary>
    [JsonPropertyName("countryCode")]
    [RegularExpression("^[A-Z]{2}$")]
    public required string CountryCode { get; init; }

    /// <summary>
    /// Canonical English country name.
    /// </summary>
    [JsonPropertyName("countryName")]
    public required string CountryName { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
