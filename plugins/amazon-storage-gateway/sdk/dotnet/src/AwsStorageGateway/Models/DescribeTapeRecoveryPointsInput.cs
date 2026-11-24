using System.Text.Json.Serialization;
using AwsStorageGateway.Core.Models;

namespace AwsStorageGateway.Models;

public record DescribeTapeRecoveryPointsInput
{
    [JsonPropertyName("GatewayARN")]
    public required string GatewayArn { get; init; }

    /// <summary>
    /// An opaque string that indicates the position at which to begin describing the virtual tape recovery points.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Marker")]
    public string? Marker { get; init; }

    /// <summary>
    /// Specifies that the number of virtual tape recovery points that are described be limited to the specified number.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Limit")]
    public int? Limit { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
