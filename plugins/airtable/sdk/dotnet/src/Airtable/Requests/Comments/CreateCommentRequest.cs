using System.ComponentModel.DataAnnotations;
using Airtable.Models;

namespace Airtable.Requests.Comments;

/// <summary>
/// The inputs of the CreateComment operation.
/// </summary>
public sealed record CreateCommentRequest
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

    public required RecordIdCommentsRequest Body { get; init; }
}
