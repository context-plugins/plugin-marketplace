using System.Text.Json.Serialization;
using AwsStorageGateway.Core.Models;

namespace AwsStorageGateway.Models;

public record DetachVolumeInput
{
    /// <summary>
    /// The Amazon Resource Name (ARN) of the volume to detach from the gateway.
    /// </summary>
    [JsonPropertyName("VolumeARN")]
    public required string VolumeArn { get; init; }

    /// <summary>
    /// Set to true to forcibly remove the iSCSI connection of the target volume and detach the volume. The default is false. If this value is set to false, you must manually disconnect the iSCSI connection from the target volume. Valid Values: true | false
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("ForceDetach")]
    public bool? ForceDetach { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
