using System.Collections.Generic;
using System.Text.Json.Serialization;
using Clix.Core.Models;

namespace Clix.Models;

/// <summary>
/// Request schema for starting live activities.
/// </summary>
public record V1StartLiveActivitiesRequest
{
    /// <summary>
    /// List of live activities to start.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("live_activities")]
    public IReadOnlyList<Clixexternalv1LiveActivity>? LiveActivities { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
