using System.Text.Json.Serialization;
using AmazonVpc.Core.Models;
using AmazonVpc.Models.Enums;

namespace AmazonVpc.Models;

public record Route
{
    /// <summary>
    /// The IPv4 CIDR block used for the destination match
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("destinationCidrBlock")]
    public string? DestinationCidrBlock { get; init; }

    /// <summary>
    /// The IPv6 CIDR block used for the destination match
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("destinationIpv6CidrBlock")]
    public string? DestinationIpv6CidrBlock { get; init; }

    /// <summary>
    /// The ID of the gateway attached to your VPC
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("gatewayId")]
    public string? GatewayId { get; init; }

    /// <summary>
    /// The ID of a NAT gateway
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("natGatewayId")]
    public string? NatGatewayId { get; init; }

    /// <summary>
    /// The ID of the network interface
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("networkInterfaceId")]
    public string? NetworkInterfaceId { get; init; }

    /// <summary>
    /// The state of the route
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("state")]
    public StateAmazonVpcRouteTablesApi? State { get; init; }

    /// <summary>
    /// Describes how the route was created
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("origin")]
    public Origin? Origin { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
