using System.Text.Json.Serialization;
using Fellow.Core.Models;

namespace Fellow.Models;

public record NoteIncludableExpensiveField
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("event_attendees")]
    public bool? EventAttendees { get; init; } = false;

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("organizer_email")]
    public bool? OrganizerEmail { get; init; } = false;

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("content_markdown")]
    public bool? ContentMarkdown { get; init; } = false;

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("content_fellow_markdown")]
    public bool? ContentFellowMarkdown { get; init; } = false;

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
