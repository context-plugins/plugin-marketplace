using System.Collections.Generic;
using System.Text.Json.Serialization;
using Apigee.Core.Models;

namespace Apigee.Models;

public record GoogleCloudApigeeV1RoutingRule
{
    /// <summary>
    /// Conflicting targets, which will be resource names specifying either deployment groups or environments.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("otherTargets")]
    public IReadOnlyList<string>? OtherTargets { get; init; }

    /// <summary>
    /// The resource name of the proxy revision that is receiving this basepath in the following format: <c>organizations/{org}/apis/{api}/revisions/{rev}</c>. This field is omitted from the IngressConfig unless the GetDeployedIngressConfig API is called with view=FULL.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("receiver")]
    public string? Receiver { get; init; }

    /// <summary>
    /// The unix timestamp when this rule was updated. This is updated whenever env_group_revision is updated. This field is omitted from the IngressConfig unless the GetDeployedIngressConfig API is called with view=FULL.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("updateTime")]
    public string? UpdateTime { get; init; }

    /// <summary>
    /// URI path prefix used to route to the specified environment. May contain one or more wildcards. For example, path segments consisting of a single <c>*</c> character will match any string.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("basepath")]
    public string? Basepath { get; init; }

    /// <summary>
    /// Name of a deployment group in an environment bound to the environment group in the following format: <c>organizations/{org}/environment/{env}/deploymentGroups/{group}</c> Only one of environment or deployment_group will be set.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("deploymentGroup")]
    public string? DeploymentGroup { get; init; }

    /// <summary>
    /// The env group config revision_id when this rule was added or last updated. This value is set when the rule is created and will only update if the the environment_id changes. It is used to determine if the runtime is up to date with respect to this rule. This field is omitted from the IngressConfig unless the GetDeployedIngressConfig API is called with view=FULL.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("envGroupRevision")]
    public string? EnvGroupRevision { get; init; }

    /// <summary>
    /// Name of an environment bound to the environment group in the following format: <c>organizations/{org}/environments/{env}</c>. Only one of environment or deployment_group will be set.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("environment")]
    public string? Environment { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
