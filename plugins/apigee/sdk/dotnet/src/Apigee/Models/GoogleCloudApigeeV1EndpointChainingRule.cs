using System.Collections.Generic;
using System.Text.Json.Serialization;
using Apigee.Core.Models;

namespace Apigee.Models;

/// <summary>
/// EndpointChainingRule specifies the proxies contained in a particular deployment group, so that other deployment groups can find them in chaining calls.
/// </summary>
public record GoogleCloudApigeeV1EndpointChainingRule
{
    /// <summary>
    /// The deployment group to target for cross-shard chaining calls to these proxies.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("deploymentGroup")]
    public string? DeploymentGroup { get; init; }

    /// <summary>
    /// List of proxy ids which may be found in the given deployment group.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("proxyIds")]
    public IReadOnlyList<string>? ProxyIds { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
