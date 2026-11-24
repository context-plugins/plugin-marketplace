using System.Text.Json.Serialization;
using ParallelSdk.Core.Models;
using ParallelSdk.Models.AnyOf;

namespace ParallelSdk.Models;

/// <summary>
/// Advanced search configuration for a task run.
/// </summary>
public record TaskAdvancedSettings
{
    /// <summary>
    /// ISO 3166-1 alpha-2 country code for geo-targeted search results.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("location")]
    public LocationParallelAiSearchApi? Location { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
