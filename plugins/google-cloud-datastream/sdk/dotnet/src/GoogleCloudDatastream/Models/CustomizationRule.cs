using System.Text.Json.Serialization;
using GoogleCloudDatastream.Core.Models;

namespace GoogleCloudDatastream.Models;

/// <summary>
/// A customization rule to apply to a set of objects.
/// </summary>
public record CustomizationRule
{
    /// <summary>
    /// BigQuery partitioning rule.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("bigqueryPartitioning")]
    public BigQueryPartitioning2? BigqueryPartitioning { get; init; }

    /// <summary>
    /// BigQuery clustering rule.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("bigqueryClustering")]
    public BigQueryClustering2? BigqueryClustering { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
