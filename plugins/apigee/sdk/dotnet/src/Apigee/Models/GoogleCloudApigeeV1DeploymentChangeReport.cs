using System.Collections.Generic;
using System.Text.Json.Serialization;
using Apigee.Core.Models;

namespace Apigee.Models;

/// <summary>
/// Response for GenerateDeployChangeReport and GenerateUndeployChangeReport. This report contains any validation failures that would cause the deployment to be rejected, as well changes and conflicts in routing that may occur due to the new deployment. The existence of a routing warning does not necessarily imply that the deployment request is bad, if the desired state of the deployment request is to effect a routing change. The primary purposes of the routing messages are: 1) To inform users of routing changes that may have an effect on traffic currently being routed to other existing deployments. 2) To warn users if some base path in the proxy will not receive traffic due to an existing deployment having already claimed that base path. The presence of routing conflicts/changes will not cause non-dry-run DeployApiProxy/UndeployApiProxy requests to be rejected.
/// </summary>
public record GoogleCloudApigeeV1DeploymentChangeReport
{
    /// <summary>
    /// All routing changes that may result from a deployment request.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("routingChanges")]
    public IReadOnlyList<GoogleCloudApigeeV1DeploymentChangeReportRoutingChange>? RoutingChanges { get; init; }

    /// <summary>
    /// All base path conflicts detected for a deployment request.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("routingConflicts")]
    public IReadOnlyList<GoogleCloudApigeeV1DeploymentChangeReportRoutingConflict>? RoutingConflicts { get; init; }

    /// <summary>
    /// Validation errors that would cause the deployment change request to be rejected.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("validationErrors")]
    public GoogleRpcPreconditionFailure2? ValidationErrors { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
