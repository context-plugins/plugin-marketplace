using RelmCrm.Models;

namespace RelmCrm.Requests.Contacts;

/// <summary>
/// The inputs of the UpdateContact operation.
/// </summary>
public sealed record UpdateContactRequest
{
    public required string Id { get; init; }

    /// <summary>
    /// The record's current version for optimistic concurrency; a mismatch returns 412 version_conflict.
    /// </summary>
    public string? IfMatch { get; init; }

    public required ContactInput Body { get; init; }
}
