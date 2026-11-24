using System.ComponentModel.DataAnnotations;
using Airtable.Core.Validation.Attributes;

namespace Airtable.Requests.Comments;

/// <summary>
/// The inputs of the ListComments operation.
/// </summary>
public sealed record ListCommentsRequest
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
    /// Pagination cursor from a previous response to fetch the next page.
    /// </summary>
    public string? Offset { get; init; }

    /// <summary>
    /// The number of comments to return per page.
    /// </summary>
    [Minimum(1)]
    [Maximum(100)]
    public int? PageSize { get; init; }
}
