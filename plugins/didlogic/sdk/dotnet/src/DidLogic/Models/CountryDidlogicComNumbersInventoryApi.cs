using System.Text.Json.Serialization;
using DidLogic.Core.Models;

namespace DidLogic.Models;

public record CountryDidlogicComNumbersInventoryApi
{
    /// <summary>
    /// Country identifier
    /// </summary>
    [JsonPropertyName("id")]
    public required int Id { get; init; }

    /// <summary>
    /// Country name
    /// </summary>
    [JsonPropertyName("name")]
    public required string Name { get; init; }

    /// <summary>
    /// ISO 3166-1 alpha-2 country code
    /// </summary>
    [JsonPropertyName("short_name")]
    public required string ShortName { get; init; }

    /// <summary>
    /// Whether country has states or provinces
    /// </summary>
    [JsonPropertyName("has_provinces_or_states")]
    public required bool HasProvincesOrStates { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
