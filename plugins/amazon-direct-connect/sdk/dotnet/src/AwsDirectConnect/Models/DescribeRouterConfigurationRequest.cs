using System.Text.Json.Serialization;
using AwsDirectConnect.Core.Models;

namespace AwsDirectConnect.Models;

public record DescribeRouterConfigurationRequest
{
    /// <summary>
    /// The ID of the virtual interface.
    /// </summary>
    [JsonPropertyName("virtualInterfaceId")]
    public required string VirtualInterfaceId { get; init; }

    /// <summary>
    /// Identifies the router by a combination of vendor, platform, and software version. For example, CiscoSystemsInc-2900SeriesRouters-IOS124.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("routerTypeIdentifier")]
    public string? RouterTypeIdentifier { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
