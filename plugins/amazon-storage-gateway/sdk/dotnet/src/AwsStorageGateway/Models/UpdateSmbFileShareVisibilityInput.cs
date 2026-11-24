using System.Text.Json.Serialization;
using AwsStorageGateway.Core.Models;

namespace AwsStorageGateway.Models;

public record UpdateSmbFileShareVisibilityInput
{
    [JsonPropertyName("GatewayARN")]
    public required string GatewayArn { get; init; }

    /// <summary>
    /// The shares on this gateway appear when listing shares.
    /// </summary>
    [JsonPropertyName("FileSharesVisible")]
    public required bool FileSharesVisible { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
