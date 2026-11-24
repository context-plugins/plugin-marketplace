using System.Text.Json.Serialization;
using GoogleCloudDataproc.Core.Models;

namespace GoogleCloudDataproc.Models;

/// <summary>
/// Optional. Shielded Instance Config for clusters using Compute Engine Shielded VMs (https://cloud.google.com/security/shielded-cloud/shielded-vm).
/// </summary>
public record ShieldedInstanceConfig2
{
    /// <summary>
    /// Optional. Defines whether instances have Secure Boot enabled.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("enableSecureBoot")]
    public bool? EnableSecureBoot { get; init; }

    /// <summary>
    /// Optional. Defines whether instances have the vTPM enabled.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("enableVtpm")]
    public bool? EnableVtpm { get; init; }

    /// <summary>
    /// Optional. Defines whether instances have integrity monitoring enabled.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("enableIntegrityMonitoring")]
    public bool? EnableIntegrityMonitoring { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
