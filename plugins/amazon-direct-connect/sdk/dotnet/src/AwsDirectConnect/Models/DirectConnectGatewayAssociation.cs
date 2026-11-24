using System.Collections.Generic;
using System.Text.Json.Serialization;
using AwsDirectConnect.Core.Models;
using AwsDirectConnect.Models.Enums;

namespace AwsDirectConnect.Models;

public record DirectConnectGatewayAssociation
{
    /// <summary>
    /// The ID of the Direct Connect gateway.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("directConnectGatewayId")]
    public string? DirectConnectGatewayId { get; init; }

    /// <summary>
    /// The ID of the Amazon Web Services account that owns the associated gateway.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("directConnectGatewayOwnerAccount")]
    public string? DirectConnectGatewayOwnerAccount { get; init; }

    /// <summary>
    /// The state of the association. The following are the possible values: associating: The initial state after calling CreateDirectConnectGatewayAssociation. associated: The Direct Connect gateway and virtual private gateway or transit gateway are successfully associated and ready to pass traffic. disassociating: The initial state after calling DeleteDirectConnectGatewayAssociation. disassociated: The virtual private gateway or transit gateway is disassociated from the Direct Connect gateway. Traffic flow between the Direct Connect gateway and virtual private gateway or transit gateway is stopped.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("associationState")]
    public AssociationState? AssociationState { get; init; }

    /// <summary>
    /// The error message if the state of an object failed to advance.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("stateChangeError")]
    public string? StateChangeError { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("associatedGateway")]
    public AssociatedGateway? AssociatedGateway { get; init; }

    /// <summary>
    /// The ID of the Direct Connect gateway association.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("associationId")]
    public string? AssociationId { get; init; }

    /// <summary>
    /// The Amazon VPC prefixes to advertise to the Direct Connect gateway.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("allowedPrefixesToDirectConnectGateway")]
    public IReadOnlyList<RouteFilterPrefix>? AllowedPrefixesToDirectConnectGateway { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("associatedCoreNetwork")]
    public AssociatedCoreNetwork? AssociatedCoreNetwork { get; init; }

    /// <summary>
    /// The ID of the virtual private gateway. Applies only to private virtual interfaces.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("virtualGatewayId")]
    public string? VirtualGatewayId { get; init; }

    /// <summary>
    /// The Amazon Web Services Region where the virtual private gateway is located.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("virtualGatewayRegion")]
    public string? VirtualGatewayRegion { get; init; }

    /// <summary>
    /// The ID of the Amazon Web Services account that owns the virtual private gateway.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("virtualGatewayOwnerAccount")]
    public string? VirtualGatewayOwnerAccount { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
