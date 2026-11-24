using System.Text.Json.Serialization;
using AwsDirectConnect.Core.Models;

namespace AwsDirectConnect.Models;

public record ConfirmPrivateVirtualInterfaceRequest
{
    /// <summary>
    /// The ID of the virtual interface.
    /// </summary>
    [JsonPropertyName("virtualInterfaceId")]
    public required string VirtualInterfaceId { get; init; }

    /// <summary>
    /// The ID of the virtual private gateway.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("virtualGatewayId")]
    public string? VirtualGatewayId { get; init; }

    /// <summary>
    /// The ID of the Direct Connect gateway.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("directConnectGatewayId")]
    public string? DirectConnectGatewayId { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
