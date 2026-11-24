using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using Fellow.Core.Models;

namespace Fellow.Models;

/// <summary>
/// Request body for replacing a single occurrence of text in a note's agenda.
/// </summary>
public record FindReplaceNoteAgendaRequest
{
    /// <summary>
    /// Existing agenda text to replace. Must appear exactly once, or the request is rejected.
    /// </summary>
    [JsonPropertyName("find")]
    [MinLength(1)]
    public required string Find { get; init; }

    /// <summary>
    /// Fellow Markdown to substitute for the matched text, in the same format the note object's content_fellow_markdown field returns. An empty string deletes the matched text.
    /// </summary>
    [JsonPropertyName("content_fellow_markdown")]
    public required string ContentFellowMarkdown { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
