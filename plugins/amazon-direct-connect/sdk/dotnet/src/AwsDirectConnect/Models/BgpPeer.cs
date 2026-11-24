using System.Text.Json.Serialization;
using AwsDirectConnect.Core.Models;
using AwsDirectConnect.Models.Enums;

namespace AwsDirectConnect.Models;

public record BgpPeer
{
    /// <summary>
    /// The ID of the BGP peer.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("bgpPeerId")]
    public string? BgpPeerId { get; init; }

    /// <summary>
    /// The autonomous system number (ASN). The valid range is from 1 to 2147483646 for Border Gateway Protocol (BGP) configuration. If you provide a number greater than the maximum, an error is returned. Use asnLong instead. You can use asnLong or asn, but not both. We recommend using asnLong as it supports a greater pool of numbers. If you provide a value in the same API call for both asn and asnLong, the API will only accept the value for asnLong. If you enter a 4-byte ASN for the asn parameter, the API returns an error. If you are using a 2-byte ASN, the API response will include the 2-byte value
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("asn")]
    public int? Asn { get; init; }

    /// <summary>
    /// The long ASN for the BGP peer. The valid range is from 1 to 4294967294 for BGP configuration. Note the following limitations when using asnLong: You can use asnLong or asn, but not both. We recommend using asnLong as it supports a greater pool of numbers. asnLong accepts any valid ASN value, regardless if it's 2-byte or 4-byte. When using a 4-byte asnLong, the API response returns 0 for the legacy asn attribute since 4-byte ASN values exceed the maximum supported value of 2,147,483,647. If you are using a 2-byte ASN, the API response will include the 2-byte value for both the asn and asnLong f
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("asnLong")]
    public int? AsnLong { get; init; }

    /// <summary>
    /// The authentication key for BGP configuration. This string has a minimum length of 6 characters and and a maximun lenth of 80 characters.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("authKey")]
    public string? AuthKey { get; init; }

    /// <summary>
    /// The address family for the BGP peer.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("addressFamily")]
    public AddressFamily? AddressFamily { get; init; }

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
    /// The state of the BGP peer. The following are the possible values: verifying: The BGP peering addresses or ASN require validation before the BGP peer can be created. This state applies only to public virtual interfaces. pending: The BGP peer is created, and remains in this state until it is ready to be established. available: The BGP peer is ready to be established. deleting: The BGP peer is being deleted. deleted: The BGP peer is deleted and cannot be established.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("bgpPeerState")]
    public BgpPeerState? BgpPeerState { get; init; }

    /// <summary>
    /// The status of the BGP peer. The following are the possible values: up: The BGP peer is established. This state does not indicate the state of the routing function. Ensure that you are receiving routes over the BGP session. down: The BGP peer is down. unknown: The BGP peer status is not available.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("bgpStatus")]
    public BgpStatus? BgpStatus { get; init; }

    /// <summary>
    /// The Direct Connect endpoint that terminates the BGP peer.
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

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
