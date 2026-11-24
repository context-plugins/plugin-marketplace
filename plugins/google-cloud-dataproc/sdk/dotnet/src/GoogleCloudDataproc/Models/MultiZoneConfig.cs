using System.Text.Json.Serialization;
using GoogleCloudDataproc.Core.Models;
using GoogleCloudDataproc.Models.Enums;

namespace GoogleCloudDataproc.Models;

/// <summary>
/// Configuration for multi-zonal clusters that can create instances across multiple Zones within the Region.
/// </summary>
public record MultiZoneConfig
{
    /// <summary>
    /// Optional. The distribution shape of the nodes in the multi-zonal cluster.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("targetShape")]
    public TargetShape? TargetShape { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
