using System.Collections.Generic;
using System.Text.Json.Serialization;
using GoogleCloudDataproc.Core.Models;
using GoogleCloudDataproc.Models.Enums;

namespace GoogleCloudDataproc.Models;

/// <summary>
/// Describes an autoscaling policy for Dataproc cluster autoscaler.
/// </summary>
public record AutoscalingPolicy
{
    /// <summary>
    /// Required. The policy id.The id must contain only letters (a-z, A-Z), numbers (0-9), underscores (_), and hyphens (-). Cannot begin or end with underscore or hyphen. Must consist of between 3 and 50 characters.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("id")]
    public string? Id { get; init; }

    /// <summary>
    /// Optional. Describes how the autoscaler will operate for secondary workers.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("secondaryWorkerConfig")]
    public InstanceGroupAutoscalingPolicyConfig1? SecondaryWorkerConfig { get; init; }

    /// <summary>
    /// Optional. The labels to associate with this autoscaling policy. Label keys must contain 1 to 63 characters, and must conform to RFC 1035 (https://www.ietf.org/rfc/rfc1035.txt). Label values may be empty, but, if present, must contain 1 to 63 characters, and must conform to RFC 1035 (https://www.ietf.org/rfc/rfc1035.txt). No more than 32 labels can be associated with an autoscaling policy.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("labels")]
    public IReadOnlyDictionary<string, string>? Labels { get; init; }

    /// <summary>
    /// Required. Describes how the autoscaler will operate for primary workers.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("workerConfig")]
    public InstanceGroupAutoscalingPolicyConfig2? WorkerConfig { get; init; }

    /// <summary>
    /// Basic algorithm for autoscaling.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("basicAlgorithm")]
    public BasicAutoscalingAlgorithm? BasicAlgorithm { get; init; }

    /// <summary>
    /// Output only. The "resource name" of the autoscaling policy, as described in https://cloud.google.com/apis/design/resource_names. For projects.regions.autoscalingPolicies, the resource name of the policy has the following format: projects/{project_id}/regions/{region}/autoscalingPolicies/{policy_id} For projects.locations.autoscalingPolicies, the resource name of the policy has the following format: projects/{project_id}/locations/{location}/autoscalingPolicies/{policy_id}
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("name")]
    public string? Name { get; init; }

    /// <summary>
    /// Optional. The type of the clusters for which this autoscaling policy is to be configured.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("clusterType")]
    public ClusterType1? ClusterType { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
