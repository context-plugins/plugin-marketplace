using System.Text.Json.Serialization;
using GoogleCloudDataproc.Core.Models;

namespace GoogleCloudDataproc.Models;

/// <summary>
/// Output only. The config for Compute Engine Instance Group Manager that manages this group. This is only used for preemptible instance groups.
/// </summary>
public record ManagedGroupConfig2
{
    /// <summary>
    /// Output only. The name of the Instance Template used for the Managed Instance Group.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("instanceTemplateName")]
    public string? InstanceTemplateName { get; init; }

    /// <summary>
    /// Output only. The name of the Instance Group Manager for this group.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("instanceGroupManagerName")]
    public string? InstanceGroupManagerName { get; init; }

    /// <summary>
    /// Output only. The partial URI to the instance group manager for this group. E.g. projects/my-project/regions/us-central1/instanceGroupManagers/my-igm.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("instanceGroupManagerUri")]
    public string? InstanceGroupManagerUri { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
