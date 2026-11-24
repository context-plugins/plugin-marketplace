using System.Text.Json.Serialization;
using NordicFinancialNews.Core.Models;
using NordicFinancialNews.Models.Enums;

namespace NordicFinancialNews.Models;

public record SourceSummary
{
    /// <summary>
    /// Unique source identifier
    /// </summary>
    [JsonPropertyName("id")]
    public required string Id { get; init; }

    /// <summary>
    /// Source display name
    /// </summary>
    [JsonPropertyName("name")]
    public required string Name { get; init; }

    /// <summary>
    /// Primary domain of the source
    /// </summary>
    [JsonPropertyName("domain")]
    public required string Domain { get; init; }

    /// <summary>
    /// Country code (ISO 3166-1 alpha-2)
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("country")]
    public string? Country { get; init; }

    /// <summary>
    /// Source type
    /// </summary>
    [JsonPropertyName("source_type")]
    public required SourceTypeNordicFinancialNewsSourcesApi SourceType { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
