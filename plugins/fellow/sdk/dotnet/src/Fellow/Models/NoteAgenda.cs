using System.Text.Json.Serialization;
using Fellow.Core.Models;

namespace Fellow.Models;

/// <summary>
/// A note's agenda content in Fellow Markdown.
/// <para>
/// Fellow Markdown is the editable format: what you read can be modified and written
/// back as-is. It is not the same format as the note object's read-only
/// <c>content_markdown</c> field.
/// </para>
/// </summary>
public record NoteAgenda
{
    [JsonPropertyName("note_id")]
    public required string NoteId { get; init; }

    [JsonPropertyName("title")]
    public required string? Title { get; init; }

    [JsonPropertyName("content_fellow_markdown")]
    public required string ContentFellowMarkdown { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
