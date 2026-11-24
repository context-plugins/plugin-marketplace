using System.Text.Json.Serialization;
using Fellow.Core.Models;

namespace Fellow.Models;

/// <summary>
/// Request body for prepending Fellow Markdown to the start of a note's agenda.
/// </summary>
public record PrependNoteAgendaRequest
{
    /// <summary>
    /// Fellow Markdown to add at the start of the agenda, in the same format the note object's content_fellow_markdown field returns.
    /// </summary>
    [JsonPropertyName("content_fellow_markdown")]
    public required string ContentFellowMarkdown { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
