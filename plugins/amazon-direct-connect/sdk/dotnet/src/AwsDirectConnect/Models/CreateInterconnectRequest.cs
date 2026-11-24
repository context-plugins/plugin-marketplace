using System.Collections.Generic;
using System.Text.Json.Serialization;
using AwsDirectConnect.Core.Models;

namespace AwsDirectConnect.Models;

public record CreateInterconnectRequest
{
    /// <summary>
    /// The name of the interconnect.
    /// </summary>
    [JsonPropertyName("interconnectName")]
    public required string InterconnectName { get; init; }

    /// <summary>
    /// The port bandwidth, in Gbps. The possible values are 1, 10, and 100.
    /// </summary>
    [JsonPropertyName("bandwidth")]
    public required string Bandwidth { get; init; }

    /// <summary>
    /// The location of the interconnect.
    /// </summary>
    [JsonPropertyName("location")]
    public required string Location { get; init; }

    /// <summary>
    /// The ID of the LAG.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("lagId")]
    public string? LagId { get; init; }

    /// <summary>
    /// The tags to associate with the interconnect.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("tags")]
    public IReadOnlyList<Tag>? Tags { get; init; }

    /// <summary>
    /// The name of the service provider associated with the interconnect.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("providerName")]
    public string? ProviderName { get; init; }

    /// <summary>
    /// Indicates whether you want the interconnect to support MAC Security (MACsec).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("requestMACSec")]
    public bool? RequestMacSec { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
