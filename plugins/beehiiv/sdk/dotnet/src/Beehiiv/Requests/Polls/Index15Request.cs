using System.Collections.Generic;
using Beehiiv.Models.Enums;

namespace Beehiiv.Requests.Polls;

/// <summary>
/// The inputs of the Index15 operation.
/// </summary>
public sealed record Index15Request
{
    /// <summary>
    /// The prefixed ID of the publication object
    /// </summary>
    public required string PublicationId { get; init; }

    /// <summary>
    /// A limit on the number of objects to be returned. The limit can range between 1 and 100, and the default is 10.
    /// </summary>
    public int? Limit { get; init; }

    /// <summary>
    /// <b>Cursor-based pagination (recommended)</b>: Use this opaque cursor token to fetch the next page of results. When provided, pagination will use cursor-based method which is more efficient and consistent than offset-based pagination.
    /// </summary>
    public string? Cursor { get; init; }

    /// <summary>
    /// <b>Offset-based pagination (deprecated)</b>: Page number for offset-based pagination. Please migrate to cursor-based pagination using the <c>cursor</c> parameter. If not specified, results 1-10 from page 1 will be returned.
    /// </summary>
    public int? Page { get; init; }

    /// <summary>
    /// The field that the results are sorted by. Defaults to created.&lt;br&gt; <c>created</c> - The time the poll was created.&lt;br&gt; <c>name</c> - The name of the poll.
    /// </summary>
    public PollOrderBy OrderBy { get; init; } = PollOrderBy.Created;

    /// <summary>
    /// The direction that the results are sorted in. Defaults to asc.&lt;br&gt; <c>asc</c> - Ascending, sorts from smallest to largest.&lt;br&gt; <c>desc</c> - Descending, sorts from largest to smallest.
    /// </summary>
    public RequestDirection Direction { get; init; } = RequestDirection.Asc;

    /// <summary>
    /// Optionally expand the response to include additional data.&lt;br&gt; <c>stats</c> - Returns aggregate vote counts per choice and total completions.&lt;br&gt; <c>poll_responses</c> - Returns up to 10 most recent subscriber responses. Use /polls/{pollId}/responses for paginated access to all responses.&lt;br&gt; <c>trivia_answer</c> - Returns the correct answer for trivia-type polls.
    /// </summary>
    public IReadOnlyList<PollsExpandItems>? Expand { get; init; }

    /// <summary>
    /// Filter to only return polls that were embedded in the specified post. Accepts a prefixed post ID (e.g. <c>post_abc123</c>).
    /// </summary>
    public string? PostId { get; init; }

    /// <summary>
    /// Bearer authentication
    /// </summary>
    public required string Authorization { get; init; }
}
