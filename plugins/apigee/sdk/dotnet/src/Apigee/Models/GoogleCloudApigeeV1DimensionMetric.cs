using System.Collections.Generic;
using System.Text.Json.Serialization;
using Apigee.Core.Models;

namespace Apigee.Models;

/// <summary>
/// Encapsulates a metric grouped by dimension.
/// </summary>
public record GoogleCloudApigeeV1DimensionMetric
{
    /// <summary>
    /// Comma joined dimension names. E.g. "dim1_name,dim2_name". Deprecated. If name already has comma before join, we may get wrong splits. Please use individual_names.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("name")]
    public string? Name { get; init; }

    /// <summary>
    /// Individual dimension names. E.g. ["dim1_name", "dim2_name"].
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("individualNames")]
    public IReadOnlyList<string>? IndividualNames { get; init; }

    /// <summary>
    /// List of metrics.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("metrics")]
    public IReadOnlyList<GoogleCloudApigeeV1Metric>? Metrics { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
