using System.Text.Json.Serialization;
using GoogleCloudDataproc.Core.Models;
using GoogleCloudDataproc.Models.Enums;

namespace GoogleCloudDataproc.Models;

/// <summary>
/// Optional. Controls how instances within this Cluster are allowed to exist in multiple Zones within the Region. Only one of zone_uri or multi_zone_config must be set.
/// </summary>
public record MultiZoneConfig2
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
