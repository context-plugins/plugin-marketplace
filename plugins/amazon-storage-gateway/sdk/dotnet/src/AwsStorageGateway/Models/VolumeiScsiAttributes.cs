using System.Text.Json.Serialization;
using AwsStorageGateway.Core.Models;

namespace AwsStorageGateway.Models;

public record VolumeiScsiAttributes
{
    /// <summary>
    /// The Amazon Resource Name (ARN) of the volume target.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("TargetARN")]
    public string? TargetArn { get; init; }

    /// <summary>
    /// The network interface identifier.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("NetworkInterfaceId")]
    public string? NetworkInterfaceId { get; init; }

    /// <summary>
    /// The port used to communicate with iSCSI targets.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("NetworkInterfacePort")]
    public int? NetworkInterfacePort { get; init; }

    /// <summary>
    /// The logical disk number.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("LunNumber")]
    public int? LunNumber { get; init; }

    /// <summary>
    /// Indicates whether mutual CHAP is enabled for the iSCSI target.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("ChapEnabled")]
    public bool? ChapEnabled { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
