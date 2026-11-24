using System.Text.Json.Serialization;
using AwsStorageGateway.Core.Models;

namespace AwsStorageGateway.Models;

public record SetSmbGuestPasswordInput
{
    /// <summary>
    /// The Amazon Resource Name (ARN) of the S3 File Gateway the SMB file share is associated with.
    /// </summary>
    [JsonPropertyName("GatewayARN")]
    public required string GatewayArn { get; init; }

    /// <summary>
    /// The password that you want to set for your SMB server.
    /// </summary>
    [JsonPropertyName("Password")]
    public required string Password { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
