using System.ComponentModel.DataAnnotations;

namespace DoiT.Requests.ServiceAccounts;

/// <summary>
/// The inputs of the DeleteServiceAccountToken operation.
/// </summary>
public sealed record DeleteServiceAccountTokenRequest
{
    /// <summary>
    /// ID of the service account that owns the token, as returned in the id field by the service account list and create operations.
    /// </summary>
    [MinLength(1)]
    public required string ServiceAccountId { get; init; }

    /// <summary>
    /// API token ID, as returned in the id field by the token list and create operations.
    /// </summary>
    [MinLength(1)]
    public required string Id { get; init; }

    /// <summary>
    /// If true, validates the request and returns the would-be result without applying it. The response then carries the X-Dry-Run header.
    /// </summary>
    public bool DryRun { get; init; } = false;

    /// <summary>
    /// Client-generated key (UUID v4 or ULID recommended). Retrying with the same key and request returns the stored response instead of repeating the operation; the key is kept for 24 hours.
    /// </summary>
    [StringLength(255, MinimumLength = 1)]
    public required string IdempotencyKey { get; init; }
}
