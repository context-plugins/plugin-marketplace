using System.ComponentModel.DataAnnotations;

namespace DoiT.Requests.Users;

/// <summary>
/// The inputs of the ResendInvite operation.
/// </summary>
public sealed record ResendInviteRequest
{
    /// <summary>
    /// The unique ID of the invited user.
    /// </summary>
    public required string Id { get; init; }

    /// <summary>
    /// If <c>true</c>, validates and simulates the operation without committing changes.
    /// The response shape is identical to a real execution.
    /// </summary>
    public bool DryRun { get; init; } = false;

    /// <summary>
    /// Client-generated idempotency key (UUID v4 or ULID recommended, max 255 characters).
    /// Re-submitting the same key with the same request returns the cached response without
    /// re-executing side effects. The server retains the key for at least 24 hours.
    /// </summary>
    [MaxLength(255)]
    public required string IdempotencyKey { get; init; }

    public object? Body { get; init; }
}
