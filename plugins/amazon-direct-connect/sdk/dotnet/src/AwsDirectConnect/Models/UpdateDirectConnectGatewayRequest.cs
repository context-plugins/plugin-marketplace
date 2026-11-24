using System.Text.Json.Serialization;
using AwsDirectConnect.Core.Models;

namespace AwsDirectConnect.Models;

public record UpdateDirectConnectGatewayRequest
{
    /// <summary>
    /// The ID of the Direct Connect gateway to update.
    /// </summary>
    [JsonPropertyName("directConnectGatewayId")]
    public required string DirectConnectGatewayId { get; init; }

    /// <summary>
    /// The new name for the Direct Connect gateway.
    /// </summary>
    [JsonPropertyName("newDirectConnectGatewayName")]
    public required string NewDirectConnectGatewayName { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
