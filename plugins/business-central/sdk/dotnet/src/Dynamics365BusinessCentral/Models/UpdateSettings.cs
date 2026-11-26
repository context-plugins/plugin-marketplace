using System;
using System.Text.Json.Serialization;
using Dynamics365BusinessCentral.Core.Models;

namespace Dynamics365BusinessCentral.Models;

public record UpdateSettings
{
    /// <summary>
    /// Preferred start time for the update window (UTC)
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("preferredStartTimeUtc")]
    public DateTimeOffset? PreferredStartTimeUtc { get; init; }

    /// <summary>
    /// Preferred end time for the update window (UTC)
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("preferredEndTimeUtc")]
    public DateTimeOffset? PreferredEndTimeUtc { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
