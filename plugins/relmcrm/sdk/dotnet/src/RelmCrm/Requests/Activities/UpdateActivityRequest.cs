using RelmCrm.Models;

namespace RelmCrm.Requests.Activities;

/// <summary>
/// The inputs of the UpdateActivity operation.
/// </summary>
public sealed record UpdateActivityRequest
{
    public required string Id { get; init; }

    /// <summary>
    /// The record's current version for optimistic concurrency; a mismatch returns 412 version_conflict.
    /// </summary>
    public string? IfMatch { get; init; }

    public required ActivityInput Body { get; init; }
}
