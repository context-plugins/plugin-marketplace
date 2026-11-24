using System.Text.Json.Serialization;
using DidLogic.Core.Models;
using DidLogic.Core.Validation.Attributes;

namespace DidLogic.Models;

public record City
{
    /// <summary>
    /// City identifier
    /// </summary>
    [JsonPropertyName("id")]
    public required int Id { get; init; }

    /// <summary>
    /// City name and state/province
    /// </summary>
    [JsonPropertyName("name")]
    public required string Name { get; init; }

    /// <summary>
    /// Area code for this city
    /// </summary>
    [JsonPropertyName("area_code")]
    public required string AreaCode { get; init; }

    /// <summary>
    /// Number of available DIDs in this city
    /// </summary>
    [JsonPropertyName("count")]
    [Minimum(0)]
    public required int Count { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
