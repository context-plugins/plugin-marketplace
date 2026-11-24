using System.Text.Json.Serialization;
using ParallelSdk.Core.Models;
using ParallelSdk.Models.AnyOf;

namespace ParallelSdk.Models;

/// <summary>
/// Advanced monitor configuration.
/// </summary>
public record AdvancedMonitorSettings
{
    /// <summary>
    /// Domain filtering preferences: preferred and disallowed domains for monitor search results.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("source_policy")]
    public SourcePolicy1? SourcePolicy { get; init; }

    /// <summary>
    /// ISO 3166-1 alpha-2 country code for geo-targeted monitor results.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("location")]
    public LocationParallelAiMonitorApi? Location { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
