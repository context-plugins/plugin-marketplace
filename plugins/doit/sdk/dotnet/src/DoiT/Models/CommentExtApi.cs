using System.Collections.Generic;
using System.Text.Json.Serialization;
using DoiT.Core.Models;

namespace DoiT.Models;

/// <summary>
/// A comment on a support ticket.
/// </summary>
public record CommentExtApi
{
    /// <summary>
    /// Comment ID.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("id")]
    public long? Id { get; init; }

    /// <summary>
    /// The text content of the comment.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("body")]
    public string? Body { get; init; }

    /// <summary>
    /// Whether the comment is public. Always present in new responses,
    /// including false for private internal notes. GET reports Zendesk
    /// visibility; POST reports the effective visibility of the created
    /// comment. Missing metadata in legacy responses or snapshots means
    /// unknown and must not be interpreted as false.
    /// </summary>
    [JsonPropertyName("public")]
    public required bool Public { get; init; }

    /// <summary>
    /// Stable comment-author attribution. User callers are represented by
    /// their verified email address; service-account callers use
    /// <c>sa:&lt;serviceAccountId&gt;</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("author")]
    public string? Author { get; init; }

    /// <summary>
    /// The time when this comment was created, in milliseconds since the epoch.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("created")]
    public long? Created { get; init; }

    /// <summary>
    /// File attachments on the comment.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("attachments")]
    public IReadOnlyList<Attachment>? Attachments { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
