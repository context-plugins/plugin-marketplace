using System;
using System.Text.Json.Serialization;
using AtlassianCompass.Core.Models;

namespace AtlassianCompass.Models;

/// <summary>
/// A pull request event. Warning: This option is currently only usable by Forge apps and does not add events to the Activity Feed.
/// </summary>
public record CompassCreatePullRequestEventInputDto
{
    /// <summary>
    /// The last time this event was updated.
    /// </summary>
    [JsonPropertyName("lastUpdated")]
    public required DateTimeOffset LastUpdated { get; init; }

    /// <summary>
    /// The cloud ID of the event.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("cloudId")]
    public string? CloudId { get; init; }

    /// <summary>
    /// The list of properties of the pull request event.
    /// </summary>
    [JsonPropertyName("pullRequestProperties")]
    public required CompassPullRequestInputPropertiesDto1 PullRequestProperties { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
