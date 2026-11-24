using System.Text.Json.Serialization;
using Fellow.Core.Models;

namespace Fellow.Models;

/// <summary>
/// Request body for writing a note's agenda and/or renaming the note.
/// </summary>
public record WriteNoteAgendaRequest
{
    /// <summary>
    /// The full agenda body in Fellow Markdown, the same format the note object's content_fellow_markdown field returns. When provided, replaces the existing agenda content.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("content_fellow_markdown")]
    public string? ContentFellowMarkdown { get; init; }

    /// <summary>
    /// New title for the note. When provided, renames the note.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("title")]
    public string? Title { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
