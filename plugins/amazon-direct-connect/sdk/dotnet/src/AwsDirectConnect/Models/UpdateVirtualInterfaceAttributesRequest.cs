using System.Text.Json.Serialization;
using AwsDirectConnect.Core.Models;

namespace AwsDirectConnect.Models;

public record UpdateVirtualInterfaceAttributesRequest
{
    /// <summary>
    /// The ID of the virtual private interface.
    /// </summary>
    [JsonPropertyName("virtualInterfaceId")]
    public required string VirtualInterfaceId { get; init; }

    /// <summary>
    /// The maximum transmission unit (MTU), in bytes. The supported values are 1500 and 8500. The default value is 1500.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("mtu")]
    public int? Mtu { get; init; }

    /// <summary>
    /// Indicates whether to enable or disable SiteLink.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("enableSiteLink")]
    public bool? EnableSiteLink { get; init; }

    /// <summary>
    /// The name of the virtual private interface.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("virtualInterfaceName")]
    public string? VirtualInterfaceName { get; init; }

    /// <summary>
    /// The number of inbound IPv4 route prefixes to allocate to the virtual interface. Not applicable to public virtual interfaces.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("prefixPoolAllocatedCountIpv4")]
    public int? PrefixPoolAllocatedCountIpv4 { get; init; }

    /// <summary>
    /// The number of inbound IPv6 route prefixes to allocate to the virtual interface. Not applicable to public virtual interfaces.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("prefixPoolAllocatedCountIpv6")]
    public int? PrefixPoolAllocatedCountIpv6 { get; init; }

    /// <summary>
    /// The rate limit (bandwidth allocation) to apply to the virtual interface. Use this to update the bandwidth allocation on an existing virtual interface.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("rateLimit")]
    public string? RateLimit { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
