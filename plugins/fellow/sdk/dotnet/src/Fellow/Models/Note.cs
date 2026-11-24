using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;
using Fellow.Core.Models;

namespace Fellow.Models;

public record Note
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("id")]
    public string? Id { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("created_at")]
    public DateTimeOffset? CreatedAt { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("updated_at")]
    public DateTimeOffset? UpdatedAt { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("title")]
    public string? Title { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("event_guid")]
    public string? EventGuid { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("event_start")]
    public DateTimeOffset? EventStart { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("event_end")]
    public DateTimeOffset? EventEnd { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("event_is_all_day")]
    public bool? EventIsAllDay { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("recording_ids")]
    public IReadOnlyList<string>? RecordingIds { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("event_attendees")]
    public IReadOnlyList<Attendee>? EventAttendees { get; init; }

    /// <summary>
    /// Email of the meeting organizer, as read from the calendar event linked to this note. Null when the note has no meeting, when the matching calendar event cannot be found, or when the event has no known organizer. The organizer is read from one attendee's copy of the event, chosen automatically, so it may change between requests and may differ from the organizer shown elsewhere for the same meeting.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("organizer_email")]
    public string? OrganizerEmail { get; init; }

    /// <summary>
    /// A simplified, read-only markdown rendering of the note content, for display and export. Lossy, and not valid input for the agenda write endpoint; to edit content, use content_fellow_markdown instead.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("content_markdown")]
    public string? ContentMarkdown { get; init; }

    /// <summary>
    /// The note content as Fellow Markdown, the editable round-trip format: what you read here is what you can write back via POST /note/{note_id}/agenda. Null when the note exceeds the serialization limits.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("content_fellow_markdown")]
    public string? ContentFellowMarkdown { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
