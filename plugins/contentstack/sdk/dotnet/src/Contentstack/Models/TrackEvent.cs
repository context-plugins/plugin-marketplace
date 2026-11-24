using System.Text.Json.Serialization;
using Contentstack.Core.Models;

namespace Contentstack.Models;

/// <summary>
/// A single event to be tracked for the user.
/// </summary>
public record TrackEvent
{
    /// <summary>
    /// The key of the event to track. Use "impression" for automatic view tracking or a custom event key defined in the Personalize Management API.
    /// </summary>
    [JsonPropertyName("eventKey")]
    public required string EventKey { get; init; }

    /// <summary>
    /// The UID of the experience associated with this event. Required for impression events.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("experience_uid")]
    public string? ExperienceUid { get; init; }

    /// <summary>
    /// The UID of the variant shown to the user. Required for impression events.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("variant_uid")]
    public string? VariantUid { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
