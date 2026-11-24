using System.Collections.Generic;
using System.Text.Json.Serialization;
using Apigee.Core.Models;
using Apigee.Models.Enums;

namespace Apigee.Models;

/// <summary>
/// Deployment represents a deployment of an API proxy or shared flow.
/// </summary>
public record GoogleCloudApigeeV1Deployment
{
    /// <summary>
    /// Errors reported for this deployment. Populated only when state == ERROR. <b>Note</b>: This field is displayed only when viewing deployment status.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("errors")]
    public IReadOnlyList<GoogleRpcStatus>? Errors { get; init; }

    /// <summary>
    /// Time the API proxy was marked <c>deployed</c> in the control plane in millisconds since epoch.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("deployStartTime")]
    public string? DeployStartTime { get; init; }

    /// <summary>
    /// API proxy revision.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("revision")]
    public string? Revision { get; init; }

    /// <summary>
    /// Environment.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("environment")]
    public string? Environment { get; init; }

    /// <summary>
    /// Current state of the deployment. <b>Note</b>: This field is displayed only when viewing deployment status.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("state")]
    public State1? State { get; init; }

    /// <summary>
    /// Conflicts in the desired state routing configuration. The presence of conflicts does not cause the state to be <c>ERROR</c>, but it will mean that some of the deployment's base paths are not routed to its environment. If the conflicts change, the state will transition to <c>PROGRESSING</c> until the latest configuration is rolled out to all instances. <b>Note</b>: This field is displayed only when viewing deployment status.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("routeConflicts")]
    public IReadOnlyList<GoogleCloudApigeeV1DeploymentChangeReportRoutingConflict>? RouteConflicts { get; init; }

    /// <summary>
    /// Status reported by each runtime instance. <b>Note</b>: This field is displayed only when viewing deployment status.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("instances")]
    public IReadOnlyList<GoogleCloudApigeeV1InstanceDeploymentStatus>? Instances { get; init; }

    /// <summary>
    /// The full resource name of Cloud IAM Service Account that this deployment is using, eg, <c>projects/-/serviceAccounts/{email}</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("serviceAccount")]
    public string? ServiceAccount { get; init; }

    /// <summary>
    /// API proxy.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("apiProxy")]
    public string? ApiProxy { get; init; }

    /// <summary>
    /// Output only. The type of the deployment (standard or extensible) Deployed proxy revision will be marked as extensible in following 2 cases. 1. The deployed proxy revision uses extensible policies. 2. If a environment supports flowhooks and flow hook is configured.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("proxyDeploymentType")]
    public ProxyDeploymentType? ProxyDeploymentType { get; init; }

    /// <summary>
    /// Status reported by runtime pods. <b>Note</b>: <b>This field is deprecated</b>. Runtime versions 1.3 and above report instance level status rather than pod status.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("pods")]
    public IReadOnlyList<GoogleCloudApigeeV1PodStatus>? Pods { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
