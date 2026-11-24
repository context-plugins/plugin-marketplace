using System.Collections.Generic;
using System.Text.Json.Serialization;
using AwsDirectConnect.Core.Models;
using AwsDirectConnect.Models.Enums;

namespace AwsDirectConnect.Models;

public record DirectConnectGateway
{
    /// <summary>
    /// The ID of the Direct Connect gateway.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("directConnectGatewayId")]
    public string? DirectConnectGatewayId { get; init; }

    /// <summary>
    /// The name of the Direct Connect gateway.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("directConnectGatewayName")]
    public string? DirectConnectGatewayName { get; init; }

    /// <summary>
    /// The autonomous system number (AS) for the Amazon side of the connection.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("amazonSideAsn")]
    public int? AmazonSideAsn { get; init; }

    /// <summary>
    /// The ID of the Amazon Web Services account that owns the Direct Connect gateway.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("ownerAccount")]
    public string? OwnerAccount { get; init; }

    /// <summary>
    /// The state of the Direct Connect gateway. The following are the possible values: pending: The initial state after calling CreateDirectConnectGateway. available: The Direct Connect gateway is ready for use. deleting: The initial state after calling DeleteDirectConnectGateway. deleted: The Direct Connect gateway is deleted and cannot pass traffic.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("directConnectGatewayState")]
    public DirectConnectGatewayState? DirectConnectGatewayState { get; init; }

    /// <summary>
    /// The error message if the state of an object failed to advance.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("stateChangeError")]
    public string? StateChangeError { get; init; }

    /// <summary>
    /// The total number of inbound route prefixes allocated to the attachments on the Direct Connect gateway. The count combines the IPv4 and IPv6 address families.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("totalPrefixPoolAllocations")]
    public int? TotalPrefixPoolAllocations { get; init; }

    /// <summary>
    /// Information about a tag.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("tags")]
    public IReadOnlyList<Tag>? Tags { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
