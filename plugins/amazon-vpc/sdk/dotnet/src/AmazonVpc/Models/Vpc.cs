using System.Collections.Generic;
using System.Text.Json.Serialization;
using AmazonVpc.Core.Models;
using AmazonVpc.Models.Enums;

namespace AmazonVpc.Models;

/// <summary>
/// Describes a VPC
/// </summary>
public record Vpc
{
    /// <summary>
    /// The ID of the VPC
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("vpcId")]
    public string? VpcId { get; init; }

    /// <summary>
    /// The current state of the VPC
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("state")]
    public StateAmazonVpcVpCsApi? State { get; init; }

    /// <summary>
    /// The primary IPv4 CIDR block for the VPC
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("cidrBlock")]
    public string? CidrBlock { get; init; }

    /// <summary>
    /// Information about the IPv4 CIDR blocks associated with the VPC
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("cidrBlockAssociationSet")]
    public IReadOnlyList<CidrBlockAssociationSet>? CidrBlockAssociationSet { get; init; }

    /// <summary>
    /// Information about the IPv6 CIDR blocks associated with the VPC
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("ipv6CidrBlockAssociationSet")]
    public IReadOnlyList<Ipv6CidrBlockAssociationSet>? Ipv6CidrBlockAssociationSet { get; init; }

    /// <summary>
    /// The ID of the set of DHCP options associated with the VPC
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("dhcpOptionsId")]
    public string? DhcpOptionsId { get; init; }

    /// <summary>
    /// The allowed tenancy of instances launched into the VPC
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("instanceTenancy")]
    public InstanceTenancy? InstanceTenancy { get; init; }

    /// <summary>
    /// Indicates whether the VPC is the default VPC
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("isDefault")]
    public bool? IsDefault { get; init; }

    /// <summary>
    /// The ID of the AWS account that owns the VPC
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("ownerId")]
    public string? OwnerId { get; init; }

    /// <summary>
    /// Any tags assigned to the VPC
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("tags")]
    public IReadOnlyList<Tag>? Tags { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
