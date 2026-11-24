using System.Collections.Generic;
using System.Text.Json.Serialization;
using AwsStorageGateway.Core.Models;

namespace AwsStorageGateway.Models;

public record DescribeWorkingStorageOutput
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("GatewayARN")]
    public string? GatewayArn { get; init; }

    /// <summary>
    /// An array of the gateway's local disk IDs that are configured as working storage. Each local disk ID is specified as a string (minimum length of 1 and maximum length of 300). If no local disks are configured as working storage, then the DiskIds array is empty.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("DiskIds")]
    public IReadOnlyList<string>? DiskIds { get; init; }

    /// <summary>
    /// The total working storage in bytes in use by the gateway. If no working storage is configured for the gateway, this field returns 0.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("WorkingStorageUsedInBytes")]
    public int? WorkingStorageUsedInBytes { get; init; }

    /// <summary>
    /// The total working storage in bytes allocated for the gateway. If no working storage is configured for the gateway, this field returns 0.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("WorkingStorageAllocatedInBytes")]
    public int? WorkingStorageAllocatedInBytes { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
