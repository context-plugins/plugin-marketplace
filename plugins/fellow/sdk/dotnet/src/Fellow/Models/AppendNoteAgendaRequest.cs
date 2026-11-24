using System.Text.Json.Serialization;
using Fellow.Core.Models;

namespace Fellow.Models;

/// <summary>
/// Request body for appending Fellow Markdown to the end of a note's agenda.
/// </summary>
public record AppendNoteAgendaRequest
{
    /// <summary>
    /// Fellow Markdown to add at the end of the agenda, in the same format the note object's content_fellow_markdown field returns.
    /// </summary>
    [JsonPropertyName("content_fellow_markdown")]
    public required string ContentFellowMarkdown { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
