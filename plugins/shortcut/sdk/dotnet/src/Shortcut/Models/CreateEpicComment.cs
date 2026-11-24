using System;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;

namespace Shortcut.Models;

public record CreateEpicComment
{
    /// <summary>
    /// The comment text.
    /// </summary>
    [JsonPropertyName("text")]
    [StringLength(100000, MinimumLength = 1)]
    public required string Text { get; init; }

    /// <summary>
    /// The Member ID of the Comment's author. Defaults to the user identified by the API token.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("author_id")]
    public Guid? AuthorId { get; init; }

    /// <summary>
    /// Defaults to the time/date the comment is created, but can be set to reflect another date.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("created_at")]
    public DateTimeOffset? CreatedAt { get; init; }

    /// <summary>
    /// Defaults to the time/date the comment is last updated, but can be set to reflect another date.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("updated_at")]
    public DateTimeOffset? UpdatedAt { get; init; }

    /// <summary>
    /// This field can be set to another unique ID. In the case that the comment has been imported from another tool, the ID in the other tool can be indicated here.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("external_id")]
    [MaxLength(128)]
    public string? ExternalId { get; init; }
}
