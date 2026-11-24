using System.Text.Json.Serialization;
using Apigee.Core.Models;

namespace Apigee.Models;

/// <summary>
/// NodeConfig for setting the min/max number of nodes associated with the environment.
/// </summary>
public record GoogleCloudApigeeV1NodeConfig
{
    /// <summary>
    /// Output only. The current total number of gateway nodes that each environment currently has across all instances.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("currentAggregateNodeCount")]
    public string? CurrentAggregateNodeCount { get; init; }

    /// <summary>
    /// Optional. The minimum total number of gateway nodes that the is reserved for all instances that has the specified environment. If not specified, the default is determined by the recommended minimum number of nodes for that gateway.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("minNodeCount")]
    public string? MinNodeCount { get; init; }

    /// <summary>
    /// Optional. The maximum total number of gateway nodes that the is reserved for all instances that has the specified environment. If not specified, the default is determined by the recommended maximum number of nodes for that gateway.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("maxNodeCount")]
    public string? MaxNodeCount { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
