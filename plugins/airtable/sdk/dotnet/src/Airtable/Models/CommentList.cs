using System.Collections.Generic;
using System.Text.Json.Serialization;
using Airtable.Core.Models;

namespace Airtable.Models;

/// <summary>
/// A paginated list of comments on a record.
/// </summary>
public record CommentList
{
    [JsonPropertyName("comments")]
    public required IReadOnlyList<Comment> Comments { get; init; }

    /// <summary>
    /// Pagination cursor for the next page of results.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("offset")]
    public string? Offset { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
