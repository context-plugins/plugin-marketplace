using System.Text.Json.Serialization;
using Apigee.Core.Models;

namespace Apigee.Models;

/// <summary>
/// Filter scores by component path. Used custom filter instead of AIP-160 as the use cases are highly constrained and predictable.
/// </summary>
public record GoogleCloudApigeeV1ComputeEnvironmentScoresRequestFilter
{
    /// <summary>
    /// Optional. Return scores for this component. Example: "/org@myorg/envgroup@myenvgroup/env@myenv/proxies/proxy@myproxy/source"
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("scorePath")]
    public string? ScorePath { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
