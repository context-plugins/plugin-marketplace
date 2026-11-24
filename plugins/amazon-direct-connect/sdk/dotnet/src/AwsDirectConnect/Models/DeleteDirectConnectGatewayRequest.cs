using System.Text.Json.Serialization;
using AwsDirectConnect.Core.Models;

namespace AwsDirectConnect.Models;

public record DeleteDirectConnectGatewayRequest
{
    /// <summary>
    /// The ID of the Direct Connect gateway.
    /// </summary>
    [JsonPropertyName("directConnectGatewayId")]
    public required string DirectConnectGatewayId { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
