using System.Text.Json.Serialization;
using Apigee.Core.Models;

namespace Apigee.Models;

/// <summary>
/// Route deployed in the ingress routing table.
/// </summary>
public record GoogleCloudApigeeV1InstanceDeploymentStatusDeployedRoute
{
    /// <summary>
    /// Base path in the routing table.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("basepath")]
    public string? Basepath { get; init; }

    /// <summary>
    /// Percentage of ingress replicas reporting this route.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("percentage")]
    public int? Percentage { get; init; }

    /// <summary>
    /// Destination environment. This will be empty if the route is not yet reported.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("environment")]
    public string? Environment { get; init; }

    /// <summary>
    /// Environment group where this route is installed.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("envgroup")]
    public string? Envgroup { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
