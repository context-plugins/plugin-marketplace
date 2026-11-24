using System.Collections.Generic;
using System.Text.Json.Serialization;
using AwsDirectConnect.Core.Models;

namespace AwsDirectConnect.Models;

public record CreateDirectConnectGatewayAssociationRequest
{
    /// <summary>
    /// The ID of the Direct Connect gateway.
    /// </summary>
    [JsonPropertyName("directConnectGatewayId")]
    public required string DirectConnectGatewayId { get; init; }

    /// <summary>
    /// The ID of the virtual private gateway or transit gateway.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("gatewayId")]
    public string? GatewayId { get; init; }

    /// <summary>
    /// The Amazon VPC prefixes to advertise to the Direct Connect gateway This parameter is required when you create an association to a transit gateway. For information about how to set the prefixes, see Allowed Prefixes in the Direct Connect User Guide.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("addAllowedPrefixesToDirectConnectGateway")]
    public IReadOnlyList<RouteFilterPrefix>? AddAllowedPrefixesToDirectConnectGateway { get; init; }

    /// <summary>
    /// The ID of the virtual private gateway.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("virtualGatewayId")]
    public string? VirtualGatewayId { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
