using System.Text.Json.Serialization;
using AwsStorageGateway.Core.Models;

namespace AwsStorageGateway.Models;

public record UpdateVtlDeviceTypeInput
{
    /// <summary>
    /// The Amazon Resource Name (ARN) of the medium changer you want to select.
    /// </summary>
    [JsonPropertyName("VTLDeviceARN")]
    public required string VtlDeviceArn { get; init; }

    /// <summary>
    /// The type of medium changer you want to select. Valid Values: STK-L700 | AWS-Gateway-VTL | IBM-03584L32-0402
    /// </summary>
    [JsonPropertyName("DeviceType")]
    public required string DeviceType { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
