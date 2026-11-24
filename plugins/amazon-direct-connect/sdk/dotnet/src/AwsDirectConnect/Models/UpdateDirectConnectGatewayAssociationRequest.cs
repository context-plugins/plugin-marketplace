using System.Collections.Generic;
using System.Text.Json.Serialization;
using AwsDirectConnect.Core.Models;

namespace AwsDirectConnect.Models;

public record UpdateDirectConnectGatewayAssociationRequest
{
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
    [JsonPropertyName("addAllowedPrefixesToDirectConnectGateway")]
    public IReadOnlyList<RouteFilterPrefix>? AddAllowedPrefixesToDirectConnectGateway { get; init; }

    /// <summary>
    /// The Amazon VPC prefixes to no longer advertise to the Direct Connect gateway.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("removeAllowedPrefixesToDirectConnectGateway")]
    public IReadOnlyList<RouteFilterPrefix>? RemoveAllowedPrefixesToDirectConnectGateway { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
