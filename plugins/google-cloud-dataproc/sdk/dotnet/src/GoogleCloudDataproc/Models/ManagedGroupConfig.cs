using System.Text.Json.Serialization;
using GoogleCloudDataproc.Core.Models;

namespace GoogleCloudDataproc.Models;

/// <summary>
/// Specifies the resources used to actively manage an instance group.
/// </summary>
public record ManagedGroupConfig
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
