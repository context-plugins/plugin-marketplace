using System.Text.Json.Serialization;
using Fellow.Core.Models;

namespace Fellow.Models;

/// <summary>
/// Response containing a note's agenda as Fellow Markdown.
/// </summary>
public record NoteAgendaResponse
{
    /// <summary>
    /// A note's agenda content in Fellow Markdown.
    /// <para>
    /// Fellow Markdown is the editable format: what you read can be modified and written
    /// back as-is. It is not the same format as the note object's read-only
    /// <c>content_markdown</c> field.
    /// </para>
    /// </summary>
    [JsonPropertyName("agenda")]
    public required NoteAgenda Agenda { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
