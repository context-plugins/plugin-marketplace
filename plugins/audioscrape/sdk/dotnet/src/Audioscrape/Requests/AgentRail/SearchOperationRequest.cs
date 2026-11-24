using Audioscrape.Models;

namespace Audioscrape.Requests.AgentRail;

/// <summary>
/// The inputs of the Search operation.
/// </summary>
public sealed record SearchOperationRequest
{
    /// <summary>
    /// <c>podcasts</c>, or <c>government</c> (public meetings and court hearings).
    /// Unset: the whole record.
    /// </summary>
    public string? Scope { get; init; }

    public required AgentSearchRequest Body { get; init; }
}
