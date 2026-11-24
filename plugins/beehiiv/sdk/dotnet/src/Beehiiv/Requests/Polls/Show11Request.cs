using System.Collections.Generic;
using Beehiiv.Models.Enums;

namespace Beehiiv.Requests.Polls;

/// <summary>
/// The inputs of the Show11 operation.
/// </summary>
public sealed record Show11Request
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
    /// Optionally expand the response to include additional data.&lt;br&gt; <c>stats</c> - Returns aggregate vote counts per choice and total completions.&lt;br&gt; <c>poll_responses</c> - Returns up to 10 most recent subscriber responses. Use /polls/{pollId}/responses for paginated access to all responses.&lt;br&gt; <c>trivia_answer</c> - Returns the correct answer for trivia-type polls.
    /// </summary>
    public IReadOnlyList<PollsExpandItems>? Expand { get; init; }

    /// <summary>
    /// Bearer authentication
    /// </summary>
    public required string Authorization { get; init; }
}
