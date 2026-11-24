using System.Text.Json.Serialization;
using AwsStorageGateway.Core.Models;

namespace AwsStorageGateway.Models;

public record UpdateSmbLocalGroupsInput
{
    [JsonPropertyName("GatewayARN")]
    public required string GatewayArn { get; init; }

    [JsonPropertyName("SMBLocalGroups")]
    public required SmbLocalGroups SmbLocalGroups { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
