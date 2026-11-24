using System.Text.Json.Serialization;
using AwsStorageGateway.Core.Models;

namespace AwsStorageGateway.Models;

public record UpdateVtlDeviceTypeOutput
{
    /// <summary>
    /// The Amazon Resource Name (ARN) of the medium changer you have selected.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("VTLDeviceARN")]
    public string? VtlDeviceArn { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
