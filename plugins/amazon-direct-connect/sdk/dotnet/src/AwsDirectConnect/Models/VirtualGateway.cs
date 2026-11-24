using System.Text.Json.Serialization;
using AwsDirectConnect.Core.Models;

namespace AwsDirectConnect.Models;

public record VirtualGateway
{
    /// <summary>
    /// The ID of the virtual private gateway.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("virtualGatewayId")]
    public string? VirtualGatewayId { get; init; }

    /// <summary>
    /// The state of the virtual private gateway. The following are the possible values: pending: Initial state after creating the virtual private gateway. available: Ready for use by a private virtual interface. deleting: Initial state after deleting the virtual private gateway. deleted: The virtual private gateway is deleted. The private virtual interface is unable to send traffic over this gateway.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("virtualGatewayState")]
    public string? VirtualGatewayState { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
