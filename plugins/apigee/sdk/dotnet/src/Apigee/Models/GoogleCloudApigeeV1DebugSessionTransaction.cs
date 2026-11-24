using System.Collections.Generic;
using System.Text.Json.Serialization;
using Apigee.Core.Models;

namespace Apigee.Models;

/// <summary>
/// A transaction contains all of the debug information of the entire message flow of an API call processed by the runtime plane. The information is collected and recorded at critical points of the message flow in the runtime apiproxy.
/// </summary>
public record GoogleCloudApigeeV1DebugSessionTransaction
{
    /// <summary>
    /// Flag indicating whether a transaction is completed or not
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("completed")]
    public bool? Completed { get; init; }

    /// <summary>
    /// List of debug data collected by runtime plane at various defined points in the flow.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("point")]
    public IReadOnlyList<GoogleCloudApigeeV1Point>? Point { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
