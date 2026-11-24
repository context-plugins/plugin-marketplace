using System.Collections.Generic;
using System.Text.Json.Serialization;
using Apigee.Core.Models;

namespace Apigee.Models;

/// <summary>
/// Encapsulates the metric data point. For example: ```{ "name": "sum(message_count)", "values" : [ { "timestamp": 1549004400000, "value": "39.0" }, { "timestamp" : 1548997200000, "value" : "0.0" } ] }``` or ```{ "name": "sum(message_count)", "values" : ["39.0"] }```
/// </summary>
public record GoogleCloudApigeeV1Metric
{
    /// <summary>
    /// List of metric values. Possible value formats include: <c>"values":["39.0"]</c> or <c>"values":[ { "value": "39.0", "timestamp": 1232434354} ]</c>
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("values")]
    public IReadOnlyList<object>? Values { get; init; }

    /// <summary>
    /// Metric name.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("name")]
    public string? Name { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
