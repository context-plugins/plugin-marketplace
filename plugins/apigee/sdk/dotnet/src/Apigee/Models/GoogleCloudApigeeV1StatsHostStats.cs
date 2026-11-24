using System.Collections.Generic;
using System.Text.Json.Serialization;
using Apigee.Core.Models;

namespace Apigee.Models;

/// <summary>
/// Encapsulates the hostname wrapper: ``` "hosts": [ { "metrics": [ { "name": "sum(message_count)", "values": [ "2.52056245E8" ] } ], "name": "example.com" } ]```
/// </summary>
public record GoogleCloudApigeeV1StatsHostStats
{
    /// <summary>
    /// Hostname used in query.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("name")]
    public string? Name { get; init; }

    /// <summary>
    /// In the final response, only one of the following fields will be present based on the dimensions provided. If no dimensions are provided, then only the top-level metrics are provided. If dimensions are included, then there will be a top-level dimensions field under hostnames which will contain metrics values and the dimension name. Example: ``` "hosts": [ { "dimensions": [ { "metrics": [ { "name": "sum(message_count)", "values": [ "2.14049521E8" ] } ], "name": "nit_proxy" } ], "name": "example.com" } ]``` OR ```"hosts": [ { "metrics": [ { "name": "sum(message_count)", "values": [ "2.19026331E8" ] } ], "name": "example.com" } ]``` List of metric values.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("metrics")]
    public IReadOnlyList<GoogleCloudApigeeV1Metric>? Metrics { get; init; }

    /// <summary>
    /// List of metrics grouped under dimensions.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("dimensions")]
    public IReadOnlyList<GoogleCloudApigeeV1DimensionMetric>? Dimensions { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
