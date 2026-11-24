using System.Collections.Generic;
using System.Text.Json.Serialization;
using AwsDirectConnect.Core.Models;
using AwsDirectConnect.Models.Enums;

namespace AwsDirectConnect.Models;

public record NewPublicVirtualInterfaceAllocation
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
    /// The ASN when allocating a new public virtual interface. The valid range is from 1 to 4294967294 for BGP configuration. Note the following limitations when using asnLong: You can use asnLong or asn, but not both. We recommend using asnLong as it supports a greater pool of numbers. asnLong accepts any valid ASN value, regardless if it's 2-byte or 4-byte. When using a 4-byte asnLong, the API response returns 0 for the legacy asn attribute since 4-byte ASN values exceed the maximum supported value of 2,147,483,647. If you are using a 2-byte ASN, the API response will include the 2-byte value for b
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
    /// The routes to be advertised to the Amazon Web Services network in this Region. Applies to public virtual interfaces.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("routeFilterPrefixes")]
    public IReadOnlyList<RouteFilterPrefix>? RouteFilterPrefixes { get; init; }

    /// <summary>
    /// The tags associated with the public virtual interface.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("tags")]
    public IReadOnlyList<Tag>? Tags { get; init; }

    /// <summary>
    /// The rate limit (bandwidth allocation) to apply to the virtual interface. The rate limit restricts the maximum bandwidth that the virtual interface can use on the parent connection.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("rateLimit")]
    public string? RateLimit { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
