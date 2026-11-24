using System.Collections.Generic;
using System.Text.Json.Serialization;
using Apigee.Core.Models;

namespace Apigee.Models;

/// <summary>
/// Encapsulates a data node as represented below: ``` { "identifier": { "names": [ "apiproxy" ], "values": [ "sirjee" ] }, "metric": [ { "env": "prod", "name": "sum(message_count)", "values": [ 36.0 ] } ] }``` or ``` { "env": "prod", "name": "sum(message_count)", "values": [ 36.0 ] }``` Depending on whether a dimension is present in the query or not the data node type can be a simple metric value or dimension identifier with list of metrics.
/// </summary>
public record GoogleCloudApigeeV1OptimizedStatsNode
{
    /// <summary>
    /// List of data values.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("data")]
    public IReadOnlyList<object>? Data { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
