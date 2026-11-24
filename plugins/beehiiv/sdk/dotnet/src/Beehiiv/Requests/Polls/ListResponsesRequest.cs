using System.Collections.Generic;
using Beehiiv.Models.Enums;

namespace Beehiiv.Requests.Polls;

/// <summary>
/// The inputs of the ListResponses operation.
/// </summary>
public sealed record ListResponsesRequest
{
    /// <summary>
    /// The prefixed ID of the publication object
    /// </summary>
    public required string PublicationId { get; init; }

    /// <summary>
    /// The prefixed ID of the poll object
    /// </summary>
    public required string PollId { get; init; }

    /// <summary>
    /// A limit on the number of objects to be returned. The limit can range between 1 and 100, and the default is 10.
    /// </summary>
    public int? Limit { get; init; }

    /// <summary>
    /// <b>Cursor-based pagination (recommended)</b>: Use this opaque cursor token to fetch the next page of results.
    /// </summary>
    public string? Cursor { get; init; }

    /// <summary>
    /// <b>Offset-based pagination (deprecated)</b>: Page number for offset-based pagination.
    /// </summary>
    public int? Page { get; init; }

    /// <summary>
    /// The field that the results are sorted by. Defaults to created.
    /// </summary>
    public PollResponsesOrderBy OrderBy { get; init; } = PollResponsesOrderBy.Created;

    /// <summary>
    /// The direction that the results are sorted in. Defaults to asc.&lt;br&gt; <c>asc</c> - Ascending, sorts from smallest to largest.&lt;br&gt; <c>desc</c> - Descending, sorts from largest to smallest.
    /// </summary>
    public RequestDirection Direction { get; init; } = RequestDirection.Asc;

    /// <summary>
    /// Optionally expand the response to include additional data.&lt;br&gt; <c>post</c> - Returns the post title and publication date for the post where each response was collected.
    /// </summary>
    public IReadOnlyList<PollResponsesExpandItems>? Expand { get; init; }

    /// <summary>
    /// Filter to only return responses collected via the specified post. Accepts a prefixed post ID (e.g. <c>post_abc123</c>).
    /// </summary>
    public string? PostId { get; init; }

    /// <summary>
    /// Bearer authentication
    /// </summary>
    public required string Authorization { get; init; }
}
