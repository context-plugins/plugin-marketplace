using System.Text.Json.Serialization;
using AwsDirectConnect.Core.Models;
using AwsDirectConnect.Models.Enums;

namespace AwsDirectConnect.Models;

public record NewBgpPeer
{
    /// <summary>
    /// The autonomous system number (ASN). The valid range is from 1 to 2147483646 for Border Gateway Protocol (BGP) configuration. If you provide a number greater than the maximum, an error is returned. Use asnLong instead.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("asn")]
    public int? Asn { get; init; }

    /// <summary>
    /// The long ASN for a new BGP peer. The valid range is from 1 to 4294967294.
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

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
