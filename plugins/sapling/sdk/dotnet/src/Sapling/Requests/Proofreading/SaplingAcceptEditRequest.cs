using System;
using Sapling.Models;

namespace Sapling.Requests.Proofreading;

/// <summary>
/// The inputs of the SaplingAcceptEdit operation.
/// </summary>
public sealed record SaplingAcceptEditRequest
{
    /// <summary>
    /// The edit's <c>id</c> from /edits.
    /// </summary>
    public required Guid EditHash { get; init; }

    public required ApiV1EditsAcceptRequest Body { get; init; }
}
