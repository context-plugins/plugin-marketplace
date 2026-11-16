using System;
using System.Text.Json.Serialization;
using FinixApiReference.Core.Models;

namespace FinixApiReference.Models;

/// <summary>
/// An object that contains the current usage and limits for disbursements.
/// </summary>
public record Velocity
{
    /// <summary>
    /// The current volume of disbursements.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("current_volume")]
    public int? CurrentVolume { get; init; }

    /// <summary>
    /// The current count of disbursements.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("current_count")]
    public int? CurrentCount { get; init; }

    /// <summary>
    /// The volume limit for disbursements.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("volume_limit")]
    public int? VolumeLimit { get; init; }

    /// <summary>
    /// The count limit for disbursements.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("count_limit")]
    public int? CountLimit { get; init; }

    /// <summary>
    /// The date and time when the usage window resets.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("window_reset")]
    public DateTimeOffset? WindowReset { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
