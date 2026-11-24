using System.Text.Json.Serialization;
using Airtable.Core.Models;

namespace Airtable.Models;

public record RecordIdCommentsCommentIdRequest
{
    /// <summary>
    /// The updated text content of the comment.
    /// </summary>
    [JsonPropertyName("text")]
    public required string Text { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
