using System.Collections.Generic;
using System.Text.Json.Serialization;
using Bitly.Core.Models;

namespace Bitly.Models;

public record GroupFeatureUsage
{
    /// <summary>
    /// the group's guid
    /// </summary>
    [JsonPropertyName("group_guid")]
    public required string GroupGuid { get; init; }

    /// <summary>
    /// an array of all of the group's consumable feature usage
    /// </summary>
    [JsonPropertyName("limit_usage")]
    public required IReadOnlyList<GroupConsumableFeatureUsage> LimitUsage { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
