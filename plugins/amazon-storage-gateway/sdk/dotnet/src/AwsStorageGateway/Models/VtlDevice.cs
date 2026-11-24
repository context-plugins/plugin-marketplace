using System.Text.Json.Serialization;
using AwsStorageGateway.Core.Models;

namespace AwsStorageGateway.Models;

public record VtlDevice
{
    /// <summary>
    /// Specifies the unique Amazon Resource Name (ARN) of the device (tape drive or media changer).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("VTLDeviceARN")]
    public string? VtlDeviceArn { get; init; }

    /// <summary>
    /// Specifies the type of device that the VTL device emulates.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("VTLDeviceType")]
    public string? VtlDeviceType { get; init; }

    /// <summary>
    /// Specifies the vendor of the device that the VTL device object emulates.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("VTLDeviceVendor")]
    public string? VtlDeviceVendor { get; init; }

    /// <summary>
    /// Specifies the model number of device that the VTL device emulates.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("VTLDeviceProductIdentifier")]
    public string? VtlDeviceProductIdentifier { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("DeviceiSCSIAttributes")]
    public DeviceiScsiAttributes? DeviceiScsiAttributes { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
