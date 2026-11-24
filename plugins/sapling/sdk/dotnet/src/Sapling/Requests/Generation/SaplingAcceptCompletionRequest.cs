using System;
using Sapling.Models;

namespace Sapling.Requests.Generation;

/// <summary>
/// The inputs of the SaplingAcceptCompletion operation.
/// </summary>
public sealed record SaplingAcceptCompletionRequest
{
    /// <summary>
    /// The <c>hash</c> returned by /api/v1/complete.
    /// </summary>
    public required Guid CompletionHash { get; init; }

    public required ApiV1CompleteAcceptRequest Body { get; init; }
}
