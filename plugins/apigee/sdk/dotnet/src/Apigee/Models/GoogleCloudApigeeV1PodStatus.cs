using System.Text.Json.Serialization;
using Apigee.Core.Models;

namespace Apigee.Models;

public record GoogleCloudApigeeV1PodStatus
{
    /// <summary>
    /// Time the deployment status was reported in milliseconds since epoch.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("deploymentStatusTime")]
    public string? DeploymentStatusTime { get; init; }

    /// <summary>
    /// Name of the pod which is reporting the status.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("podName")]
    public string? PodName { get; init; }

    /// <summary>
    /// Version of the application running in the pod.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("appVersion")]
    public string? AppVersion { get; init; }

    /// <summary>
    /// Code associated with the deployment status.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("statusCode")]
    public string? StatusCode { get; init; }

    /// <summary>
    /// Status of the deployment. Valid values include: - <c>deployed</c>: Successful. - <c>error</c> : Failed. - <c>pending</c> : Pod has not yet reported on the deployment.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("deploymentStatus")]
    public string? DeploymentStatus { get; init; }

    /// <summary>
    /// Time the pod status was reported in milliseconds since epoch.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("podStatusTime")]
    public string? PodStatusTime { get; init; }

    /// <summary>
    /// Overall status of the pod (not this specific deployment). Valid values include: - <c>active</c>: Up to date. - <c>stale</c> : Recently out of date. Pods that have not reported status in a long time are excluded from the output.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("podStatus")]
    public string? PodStatus { get; init; }

    /// <summary>
    /// Human-readable message associated with the status code.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("statusCodeDetails")]
    public string? StatusCodeDetails { get; init; }

    /// <summary>
    /// Time the proxy was deployed in milliseconds since epoch.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("deploymentTime")]
    public string? DeploymentTime { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
