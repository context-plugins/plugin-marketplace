using System.Text.Json.Serialization;
using AwsStorageGateway.Core.Models;

namespace AwsStorageGateway.Models;

public record CancelArchivalInput
{
    [JsonPropertyName("GatewayARN")]
    public required string GatewayArn { get; init; }

    /// <summary>
    /// The Amazon Resource Name (ARN) of the virtual tape you want to cancel archiving for.
    /// </summary>
    [JsonPropertyName("TapeARN")]
    public required string TapeArn { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
