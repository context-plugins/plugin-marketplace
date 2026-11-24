using System.ComponentModel.DataAnnotations;
using DoiT.Models;

namespace DoiT.Requests.ServiceAccounts;

/// <summary>
/// The inputs of the CreateServiceAccount operation.
/// </summary>
public sealed record CreateServiceAccountOperationRequest
{
    /// <summary>
    /// If true, validates the request and returns the would-be result without applying it. The response then carries the X-Dry-Run header.
    /// </summary>
    public bool DryRun { get; init; } = false;

    /// <summary>
    /// Client-generated key (UUID v4 or ULID recommended). Retrying with the same key and request returns the stored response instead of repeating the operation; the key is kept for 24 hours.
    /// </summary>
    [StringLength(255, MinimumLength = 1)]
    public required string IdempotencyKey { get; init; }

    /// <summary>
    /// The service account to create.
    /// </summary>
    public required CreateServiceAccountRequest Body { get; init; }
}
