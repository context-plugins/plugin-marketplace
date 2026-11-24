using System.Text.Json.Serialization;
using AwsStorageGateway.Core.Models;

namespace AwsStorageGateway.Models;

public record DeviceiScsiAttributes
{
    /// <summary>
    /// Specifies the unique Amazon Resource Name (ARN) that encodes the iSCSI qualified name(iqn) of a tape drive or media changer target.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("TargetARN")]
    public string? TargetArn { get; init; }

    /// <summary>
    /// The network interface identifier of the VTL device.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("NetworkInterfaceId")]
    public string? NetworkInterfaceId { get; init; }

    /// <summary>
    /// The port used to communicate with iSCSI VTL device targets.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("NetworkInterfacePort")]
    public int? NetworkInterfacePort { get; init; }

    /// <summary>
    /// Indicates whether mutual CHAP is enabled for the iSCSI target.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("ChapEnabled")]
    public bool? ChapEnabled { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
