using System.ComponentModel.DataAnnotations;
using DoiT.Models;

namespace DoiT.Requests.CloudFlowApi;

/// <summary>
/// The inputs of the ImportCloudflowFlow operation.
/// </summary>
public sealed record ImportCloudflowFlowRequest
{
    /// <summary>
    /// If <c>true</c>, validates the bundle and resolves its requirements against the tenant
    /// without committing changes, returning the import plan.
    /// </summary>
    public bool DryRun { get; init; } = false;

    /// <summary>
    /// Client-generated idempotency key (UUID v4 or ULID recommended, max 255 characters).
    /// Re-submitting the same key with the same request returns the cached response without
    /// re-executing side effects. The server retains the key for at least 24 hours.
    /// </summary>
    [MaxLength(255)]
    public required string IdempotencyKey { get; init; }

    public required CloudflowImportFlowsRequest Body { get; init; }
}
