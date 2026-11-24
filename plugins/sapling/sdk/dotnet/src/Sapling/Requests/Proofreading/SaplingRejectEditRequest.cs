using System;
using Sapling.Models;

namespace Sapling.Requests.Proofreading;

/// <summary>
/// The inputs of the SaplingRejectEdit operation.
/// </summary>
public sealed record SaplingRejectEditRequest
{
    /// <summary>
    /// The edit's <c>id</c> from /edits.
    /// </summary>
    public required Guid EditHash { get; init; }

    public required ApiV1EditsRejectRequest Body { get; init; }
}
