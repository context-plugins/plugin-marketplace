using System.Collections.Generic;
using System.Text.Json.Serialization;
using GoogleCloudDataproc.Core.Models;

namespace GoogleCloudDataproc.Models;

/// <summary>
/// Execution configuration for a workload.
/// </summary>
public record ExecutionConfig
{
    /// <summary>
    /// Optional. The duration after which the workload will be terminated, specified as the JSON representation for Duration (https://protobuf.dev/programming-guides/proto3/#json). When the workload exceeds this duration, it will be unconditionally terminated without waiting for ongoing work to finish. If ttl is not specified for a batch workload, the workload will be allowed to run until it exits naturally (or run forever without exiting). If ttl is not specified for an interactive session, it defaults to 24 hours. If ttl is not specified for a batch that uses 2.1+ runtime version, it defaults to 4 hours. Minimum value is 10 minutes; maximum value is 14 days. If both ttl and idle_ttl are specified (for an interactive session), the conditions are treated as OR conditions: the workload will be terminated when it has been idle for idle_ttl or when ttl has been exceeded, whichever occurs first.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("ttl")]
    public string? Ttl { get; init; }

    /// <summary>
    /// Optional. Applies to sessions only. The duration to keep the session alive while it's idling. Exceeding this threshold causes the session to terminate. This field cannot be set on a batch workload. Minimum value is 10 minutes; maximum value is 14 days (see JSON representation of Duration (https://developers.google.com/protocol-buffers/docs/proto3#json)). Defaults to 1 hour if not set. If both ttl and idle_ttl are specified for an interactive session, the conditions are treated as OR conditions: the workload will be terminated when it has been idle for idle_ttl or when ttl has been exceeded, whichever occurs first.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("idleTtl")]
    public string? IdleTtl { get; init; }

    /// <summary>
    /// Optional. Associates Resource Manager tags with the workload nodes. There is a max limit of 30 tags. Keys and values can be either in numeric format, such as tagKeys/{tag_key_id} and tagValues/{tag_value_id}, or in namespaced format, such as {org_id|project_id}/{tag_key_short_name} and {tag_value_short_name}.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("resourceManagerTags")]
    public IReadOnlyDictionary<string, string>? ResourceManagerTags { get; init; }

    /// <summary>
    /// Optional. Service account that used to execute workload.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("serviceAccount")]
    public string? ServiceAccount { get; init; }

    /// <summary>
    /// Optional. Subnetwork URI to connect workload to.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("subnetworkUri")]
    public string? SubnetworkUri { get; init; }

    /// <summary>
    /// Optional. The Cloud KMS key to use for encryption.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("kmsKey")]
    public string? KmsKey { get; init; }

    /// <summary>
    /// Optional. Authentication configuration used to set the default identity for the workload execution. The config specifies the type of identity (service account or user) that will be used by workloads to access resources on the project(s).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("authenticationConfig")]
    public AuthenticationConfig2? AuthenticationConfig { get; init; }

    /// <summary>
    /// Optional. A Cloud Storage bucket used to stage workload dependencies, config files, and store workload output and other ephemeral data, such as Spark history files. If you do not specify a staging bucket, Cloud Dataproc will determine a Cloud Storage location according to the region where your workload is running, and then create and manage project-level, per-location staging and temporary buckets. This field requires a Cloud Storage bucket name, not a gs://... URI to a Cloud Storage bucket.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("stagingBucket")]
    public string? StagingBucket { get; init; }

    /// <summary>
    /// Optional. Tags used for network traffic control.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("networkTags")]
    public IReadOnlyList<string>? NetworkTags { get; init; }

    /// <summary>
    /// Optional. Network URI to connect workload to.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("networkUri")]
    public string? NetworkUri { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
