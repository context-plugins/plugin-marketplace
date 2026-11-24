using System.Text.Json.Serialization;
using Airtable.Core.Models;

namespace Airtable.Models;

public record RecordIdCommentsCommentIdResponse
{
    /// <summary>
    /// The ID of the deleted comment.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("id")]
    public string? Id { get; init; }

    /// <summary>
    /// Always true when the deletion succeeds.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("deleted")]
    public bool? Deleted { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
