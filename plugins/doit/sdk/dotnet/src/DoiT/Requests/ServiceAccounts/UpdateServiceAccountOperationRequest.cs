using System.ComponentModel.DataAnnotations;
using DoiT.Models;

namespace DoiT.Requests.ServiceAccounts;

/// <summary>
/// The inputs of the UpdateServiceAccount operation.
/// </summary>
public sealed record UpdateServiceAccountOperationRequest
{
    /// <summary>
    /// Service account ID, as returned in the id field by the list and create operations.
    /// </summary>
    [MinLength(1)]
    public required string Id { get; init; }

    /// <summary>
    /// If true, validates the request and returns the would-be result without applying it. The response then carries the X-Dry-Run header.
    /// </summary>
    public bool DryRun { get; init; } = false;

    /// <summary>
    /// The ETag of the current version, from a get, create or update response. A stale value returns 412; re-read the resource and retry with the new ETag.
    /// </summary>
    public required string IfMatch { get; init; }

    /// <summary>
    /// Client-generated key (UUID v4 or ULID recommended). Retrying with the same key and request returns the stored response instead of repeating the operation; the key is kept for 24 hours.
    /// </summary>
    [StringLength(255, MinimumLength = 1)]
    public required string IdempotencyKey { get; init; }

    /// <summary>
    /// The fields to change.
    /// </summary>
    public required UpdateServiceAccountRequest Body { get; init; }
}
