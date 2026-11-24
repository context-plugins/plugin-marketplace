using System.Text.Json.Serialization;
using DidLogic.Core.Models;

namespace DidLogic.Models;

public record Location
{
    /// <summary>
    /// City identifier
    /// </summary>
    [JsonPropertyName("city_id")]
    public required int CityId { get; init; }

    /// <summary>
    /// City name
    /// </summary>
    [JsonPropertyName("city_name")]
    public required string CityName { get; init; }

    /// <summary>
    /// Country name
    /// </summary>
    [JsonPropertyName("country_name")]
    public required string CountryName { get; init; }

    /// <summary>
    /// State identifier (if applicable)
    /// </summary>
    [JsonPropertyName("state_id")]
    public required int StateId { get; init; }

    /// <summary>
    /// Country identifier
    /// </summary>
    [JsonPropertyName("country_id")]
    public required int CountryId { get; init; }

    /// <summary>
    /// Combined location label for display
    /// </summary>
    [JsonPropertyName("label")]
    public required string Label { get; init; }

    /// <summary>
    /// City code/area code
    /// </summary>
    [JsonPropertyName("city_code")]
    public required int CityCode { get; init; }

    /// <summary>
    /// State name (if applicable)
    /// </summary>
    [JsonPropertyName("state_name")]
    public required string StateName { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
