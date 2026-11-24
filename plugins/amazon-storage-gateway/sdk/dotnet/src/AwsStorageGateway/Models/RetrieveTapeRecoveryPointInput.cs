using System.Text.Json.Serialization;
using AwsStorageGateway.Core.Models;

namespace AwsStorageGateway.Models;

public record RetrieveTapeRecoveryPointInput
{
    /// <summary>
    /// The Amazon Resource Name (ARN) of the virtual tape for which you want to retrieve the recovery point.
    /// </summary>
    [JsonPropertyName("TapeARN")]
    public required string TapeArn { get; init; }

    [JsonPropertyName("GatewayARN")]
    public required string GatewayArn { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
