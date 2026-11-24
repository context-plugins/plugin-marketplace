using System.ComponentModel.DataAnnotations;

namespace Airtable.Requests.Comments;

/// <summary>
/// The inputs of the DeleteComment operation.
/// </summary>
public sealed record DeleteCommentRequest
{
    /// <summary>
    /// The unique identifier of the base (starts with 'app').
    /// </summary>
    [RegularExpression("^app[a-zA-Z0-9]+$")]
    public required string BaseId { get; init; }

    /// <summary>
    /// The name or unique identifier (starts with 'tbl') of the table.
    /// </summary>
    public required string TableIdOrName { get; init; }

    /// <summary>
    /// The unique identifier of the record (starts with 'rec').
    /// </summary>
    [RegularExpression("^rec[a-zA-Z0-9]+$")]
    public required string RecordId { get; init; }

    /// <summary>
    /// The unique identifier of the comment.
    /// </summary>
    public required string CommentId { get; init; }
}
