using System.Text.Json.Serialization;
using GoogleCloudDataproc.Core.Models;

namespace GoogleCloudDataproc.Models;

/// <summary>
/// Optional. Driver scheduling configuration.
/// </summary>
public record DriverSchedulingConfig2
{
    /// <summary>
    /// Required. The amount of memory in MB the driver is requesting.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("memoryMb")]
    public int? MemoryMb { get; init; }

    /// <summary>
    /// Required. The number of vCPUs the driver is requesting.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("vcores")]
    public int? Vcores { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
