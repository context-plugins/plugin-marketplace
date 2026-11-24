using System.Text.Json.Serialization;
using AwsStorageGateway.Core.Models;

namespace AwsStorageGateway.Models;

public record DeleteTapePoolInput
{
    /// <summary>
    /// The Amazon Resource Name (ARN) of the custom tape pool to delete.
    /// </summary>
    [JsonPropertyName("PoolARN")]
    public required string PoolArn { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
