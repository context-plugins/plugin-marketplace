using System.Collections.Generic;
using System.Text.Json.Serialization;
using AwsDirectConnect.Core.Models;
using AwsDirectConnect.Models.Enums;

namespace AwsDirectConnect.Models;

public record NewPrivateVirtualInterface
{
    /// <summary>
    /// The name of the virtual interface assigned by the customer network. The name has a maximum of 100 characters. The following are valid characters: a-z, 0-9 and a hyphen (-).
    /// </summary>
    [JsonPropertyName("virtualInterfaceName")]
    public required string VirtualInterfaceName { get; init; }

    /// <summary>
    /// The ID of the VLAN.
    /// </summary>
    [JsonPropertyName("vlan")]
    public required int Vlan { get; init; }

    /// <summary>
    /// The autonomous system number (ASN). The valid range is from 1 to 2147483646 for Border Gateway Protocol (BGP) configuration. If you provide a number greater than the maximum, an error is returned. Use asnLong instead. You can use asnLong or asn, but not both. We recommend using asnLong as it supports a greater pool of numbers. If you provide a value in the same API call for both asn and asnLong, the API will only accept the value for asnLong. If you enter a 4-byte ASN for the asn parameter, the API returns an error. If you are using a 2-byte ASN, the API response will include the 2-byte value
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("asn")]
    public int? Asn { get; init; }

    /// <summary>
    /// The long ASN for a new private virtual interface. The valid range is from 1 to 4294967294 for BGP configuration. Note the following limitations when using asnLong: You can use asnLong or asn, but not both. We recommend using asnLong as it supports a greater pool of numbers. asnLong accepts any valid ASN value, regardless if it's 2-byte or 4-byte. When using a 4-byte asnLong, the API response returns 0 for the legacy asn attribute since 4-byte ASN values exceed the maximum supported value of 2,147,483,647. If you are using a 2-byte ASN, the API response will include the 2-byte value for both th
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("asnLong")]
    public int? AsnLong { get; init; }

    /// <summary>
    /// The maximum transmission unit (MTU), in bytes. The supported values are 1500 and 8500. The default value is 1500.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("mtu")]
    public int? Mtu { get; init; }

    /// <summary>
    /// The authentication key for BGP configuration. This string has a minimum length of 6 characters and and a maximun lenth of 80 characters.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("authKey")]
    public string? AuthKey { get; init; }

    /// <summary>
    /// The IP address assigned to the Amazon interface.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("amazonAddress")]
    public string? AmazonAddress { get; init; }

    /// <summary>
    /// The IP address assigned to the customer interface.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("customerAddress")]
    public string? CustomerAddress { get; init; }

    /// <summary>
    /// The address family for the BGP peer.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("addressFamily")]
    public AddressFamily? AddressFamily { get; init; }

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

    /// <summary>
    /// The tags associated with the private virtual interface.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("tags")]
    public IReadOnlyList<Tag>? Tags { get; init; }

    /// <summary>
    /// Indicates whether to enable or disable SiteLink.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("enableSiteLink")]
    public bool? EnableSiteLink { get; init; }

    /// <summary>
    /// The number of inbound IPv4 route prefixes to allocate to the virtual interface.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("prefixPoolAllocatedCountIpv4")]
    public int? PrefixPoolAllocatedCountIpv4 { get; init; }

    /// <summary>
    /// The number of inbound IPv6 route prefixes to allocate to the virtual interface.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("prefixPoolAllocatedCountIpv6")]
    public int? PrefixPoolAllocatedCountIpv6 { get; init; }

    /// <summary>
    /// The rate limit (bandwidth allocation) to apply to the virtual interface. The rate limit restricts the maximum bandwidth that the virtual interface can use on the parent connection.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("rateLimit")]
    public string? RateLimit { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
