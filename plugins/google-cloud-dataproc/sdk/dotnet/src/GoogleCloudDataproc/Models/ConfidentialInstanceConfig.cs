using System.Text.Json.Serialization;
using GoogleCloudDataproc.Core.Models;
using GoogleCloudDataproc.Models.Enums;

namespace GoogleCloudDataproc.Models;

/// <summary>
/// Confidential Instance Config for clusters using Confidential VMs (https://cloud.google.com/confidential-computing/confidential-vm/docs)
/// </summary>
public record ConfidentialInstanceConfig
{
    /// <summary>
    /// Optional. Defines the type of Confidential Compute technology to use.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("confidentialInstanceType")]
    public ConfidentialInstanceType? ConfidentialInstanceType { get; init; }

    /// <summary>
    /// Optional. Deprecated: Use 'confidential_instance_type' instead. Defines whether the instance should have confidential compute enabled.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("enableConfidentialCompute")]
    public bool? EnableConfidentialCompute { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
