using System.Collections.Generic;
using System.Text.Json.Serialization;
using AwsDirectConnect.Core.Models;
using AwsDirectConnect.Models.Enums;

namespace AwsDirectConnect.Models;

public record VirtualInterface
{
    /// <summary>
    /// The ID of the Amazon Web Services account that owns the virtual interface.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("ownerAccount")]
    public string? OwnerAccount { get; init; }

    /// <summary>
    /// The ID of the virtual interface.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("virtualInterfaceId")]
    public string? VirtualInterfaceId { get; init; }

    /// <summary>
    /// The location of the connection.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("location")]
    public string? Location { get; init; }

    /// <summary>
    /// The ID of the connection.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("connectionId")]
    public string? ConnectionId { get; init; }

    /// <summary>
    /// The type of virtual interface. The possible values are private, public and transit.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("virtualInterfaceType")]
    public string? VirtualInterfaceType { get; init; }

    /// <summary>
    /// The name of the virtual interface assigned by the customer network. The name has a maximum of 100 characters. The following are valid characters: a-z, 0-9 and a hyphen (-).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("virtualInterfaceName")]
    public string? VirtualInterfaceName { get; init; }

    /// <summary>
    /// The ID of the VLAN.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("vlan")]
    public int? Vlan { get; init; }

    /// <summary>
    /// The autonomous system number (ASN). The valid range is from 1 to 2147483646 for Border Gateway Protocol (BGP) configuration. If you provide a number greater than the maximum, an error is returned. Use asnLong instead. You can use asnLong or asn, but not both. We recommend using asnLong as it supports a greater pool of numbers. If you provide a value in the same API call for both asn and asnLong, the API will only accept the value for asnLong. If you enter a 4-byte ASN for the asn parameter, the API returns an error. If you are using a 2-byte ASN, the API response will include the 2-byte value
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("asn")]
    public int? Asn { get; init; }

    /// <summary>
    /// The long ASN for the virtual interface. The valid range is from 1 to 4294967294 for BGP configuration. Note the following limitations when using asnLong: You can use asnLong or asn, but not both. We recommend using asnLong as it supports a greater pool of numbers. asnLong accepts any valid ASN value, regardless if it's 2-byte or 4-byte. When using a 4-byte asnLong, the API response returns 0 for the legacy asn attribute since 4-byte ASN values exceed the maximum supported value of 2,147,483,647. If you are using a 2-byte ASN, the API response will include the 2-byte value for both the asn and
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("asnLong")]
    public int? AsnLong { get; init; }

    /// <summary>
    /// The autonomous system number (AS) for the Amazon side of the connection.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("amazonSideAsn")]
    public int? AmazonSideAsn { get; init; }

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
    /// The state of the virtual interface. The following are the possible values: confirming: The creation of the virtual interface is pending confirmation from the virtual interface owner. If the owner of the virtual interface is different from the owner of the connection on which it is provisioned, then the virtual interface will remain in this state until it is confirmed by the virtual interface owner. verifying: This state only applies to public virtual interfaces. Each public virtual interface needs validation before the virtual interface can be created. pending: A virtual interface is in this s
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("virtualInterfaceState")]
    public VirtualInterfaceState? VirtualInterfaceState { get; init; }

    /// <summary>
    /// The customer router configuration.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("customerRouterConfig")]
    public string? CustomerRouterConfig { get; init; }

    /// <summary>
    /// The maximum transmission unit (MTU), in bytes. The supported values are 1500 and 8500. The default value is 1500
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("mtu")]
    public int? Mtu { get; init; }

    /// <summary>
    /// Indicates whether jumbo frames are supported.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("jumboFrameCapable")]
    public bool? JumboFrameCapable { get; init; }

    /// <summary>
    /// The ID of the virtual private gateway. Applies only to private virtual interfaces.
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
    /// The routes to be advertised to the Amazon Web Services network in this Region. Applies to public virtual interfaces.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("routeFilterPrefixes")]
    public IReadOnlyList<RouteFilterPrefix>? RouteFilterPrefixes { get; init; }

    /// <summary>
    /// The BGP peers configured on this virtual interface.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("bgpPeers")]
    public IReadOnlyList<BgpPeer>? BgpPeers { get; init; }

    /// <summary>
    /// The Amazon Web Services Region where the virtual interface is located.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("region")]
    public string? Region { get; init; }

    /// <summary>
    /// The Direct Connect endpoint that terminates the physical connection.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("awsDeviceV2")]
    public string? AwsDeviceV2 { get; init; }

    /// <summary>
    /// The Direct Connect endpoint that terminates the logical connection. This device might be different than the device that terminates the physical connection.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("awsLogicalDeviceId")]
    public string? AwsLogicalDeviceId { get; init; }

    /// <summary>
    /// The tags associated with the virtual interface.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("tags")]
    public IReadOnlyList<Tag>? Tags { get; init; }

    /// <summary>
    /// Indicates whether SiteLink is enabled.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("siteLinkEnabled")]
    public bool? SiteLinkEnabled { get; init; }

    /// <summary>
    /// The number of inbound IPv4 route prefixes allocated to the virtual interface. Not applicable to public virtual interfaces.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("prefixPoolAllocatedCountIpv4")]
    public int? PrefixPoolAllocatedCountIpv4 { get; init; }

    /// <summary>
    /// The number of inbound IPv6 route prefixes allocated to the virtual interface. Not applicable to public virtual interfaces.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("prefixPoolAllocatedCountIpv6")]
    public int? PrefixPoolAllocatedCountIpv6 { get; init; }

    /// <summary>
    /// The rate limit (bandwidth allocation) applied to the virtual interface. The value must be one of the supported bandwidth values and cannot exceed the bandwidth of the parent connection or LAG. Supported values: 50Mbps, 100Mbps, 200Mbps, 300Mbps, 400Mbps, 500Mbps, 600Mbps, 700Mbps, 800Mbps, 900Mbps, 1Gbps, 1.2Gbps, 1.5Gbps, 1.8Gbps, 2Gbps, 2.1Gbps, 2.4Gbps, 2.7Gbps, 3Gbps, 3.2Gbps, 3.6Gbps, 4Gbps, 5Gbps, 6Gbps, 7Gbps, 8Gbps, 9Gbps, 10Gbps, 12Gbps, 15Gbps, 18Gbps, 20Gbps, 21Gbps, 24Gbps, 27Gbps, 30Gbps, 32Gbps, 36Gbps, 40Gbps, 50Gbps, 60Gbps, 70Gbps, 80Gbps, 100Gbps, 120Gbps, 150Gbps, 180Gbps, 2
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("rateLimit")]
    public string? RateLimit { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
