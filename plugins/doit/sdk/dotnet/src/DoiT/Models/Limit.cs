using System.Text.Json.Serialization;
using DoiT.Core.Models;
using DoiT.Models.Enums;

namespace DoiT.Models;

/// <summary>
/// To limit the number of results based on ranking. See <see href="https://help.doit.com/docs/cloud-analytics/reports/editing-your-cloud-report#limit-by-topbottom">Limit by rank</see>.
/// </summary>
public record Limit
{
    /// <summary>
    /// Metric selector used in reports and filters.
    /// </summary>
    [JsonPropertyName("metric")]
    public required ExternalMetric Metric { get; init; }

    /// <summary>
    /// Sort order for ranking results.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("sort")]
    public Sort? Sort { get; init; }

    /// <summary>
    /// The number of items to show
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("value")]
    public long? Value { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
