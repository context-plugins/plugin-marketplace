using System.Collections.Generic;
using System.Text.Json.Serialization;
using AwsStorageGateway.Core.Models;

namespace AwsStorageGateway.Models;

public record DescribeTapeRecoveryPointsOutput
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("GatewayARN")]
    public string? GatewayArn { get; init; }

    /// <summary>
    /// An array of TapeRecoveryPointInfos that are available for the specified gateway.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("TapeRecoveryPointInfos")]
    public IReadOnlyList<TapeRecoveryPointInfo>? TapeRecoveryPointInfos { get; init; }

    /// <summary>
    /// An opaque string that indicates the position at which the virtual tape recovery points that were listed for description ended. Use this marker in your next request to list the next set of virtual tape recovery points in the list. If there are no more recovery points to describe, this field does not appear in the response.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Marker")]
    public string? Marker { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
