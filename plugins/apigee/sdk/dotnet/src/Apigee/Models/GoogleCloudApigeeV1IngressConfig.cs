using System.Collections.Generic;
using System.Text.Json.Serialization;
using Apigee.Core.Models;

namespace Apigee.Models;

public record GoogleCloudApigeeV1IngressConfig
{
    /// <summary>
    /// Time at which the IngressConfig revision was created.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("revisionCreateTime")]
    public string? RevisionCreateTime { get; init; }

    /// <summary>
    /// A unique id for the ingress config that will only change if the organization is deleted and recreated.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("uid")]
    public string? Uid { get; init; }

    /// <summary>
    /// List of environment groups in the organization.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("environmentGroups")]
    public IReadOnlyList<GoogleCloudApigeeV1EnvironmentGroupConfig>? EnvironmentGroups { get; init; }

    /// <summary>
    /// Name of the resource in the following format: <c>organizations/{org}/deployedIngressConfig</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("name")]
    public string? Name { get; init; }

    /// <summary>
    /// Revision id that defines the ordering on IngressConfig resources. The higher the revision, the more recently the configuration was deployed.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("revisionId")]
    public string? RevisionId { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
