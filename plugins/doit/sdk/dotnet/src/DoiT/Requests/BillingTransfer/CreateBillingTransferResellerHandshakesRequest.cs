using System.ComponentModel.DataAnnotations;
using DoiT.Models;

namespace DoiT.Requests.BillingTransfer;

/// <summary>
/// The inputs of the CreateBillingTransferResellerHandshakes operation.
/// </summary>
public sealed record CreateBillingTransferResellerHandshakesRequest
{
    /// <summary>
    /// If <c>true</c>, validates the batch and simulates the outcome without issuing any AWS
    /// Organizations handshakes. The response shape is identical to a real execution.
    /// </summary>
    public bool DryRun { get; init; } = false;

    /// <summary>
    /// Client-generated idempotency key (UUID v4 or ULID recommended, max 255 characters).
    /// Re-submitting the same key with the same request returns the cached response without
    /// re-executing side effects.
    /// </summary>
    [MaxLength(255)]
    public required string IdempotencyKey { get; init; }

    /// <summary>
    /// Customer (tenant) ID for the request. This is separate from authentication: you still pass your personal or service account API token in the <c>Authorization</c> header (<c>Bearer &lt;token&gt;</c>). See <see href="https://developer.doit.com/docs/start">Get Started</see>.
    /// <para>
    /// <b>When to omit (most callers):</b> If your personal or service account token belongs to a single customer, omit this header. The API resolves that customer from the token.
    /// </para>
    /// <para>
    /// <b>When to send:</b> If your credential can access more than one customer, set <c>X-Tenant-Id</c> to the customer ID you want to act on. A service account can select an active direct or nested descendant of its home customer; the endpoint's normal permissions, entitlements, and resource-ownership checks still apply. A service-account target outside that customer subtree returns <c>403 Forbidden</c>. Prefer this header over the legacy <c>customerContext</c> query parameter, which only applies to legacy API keys and is ignored by personal and service account tokens.
    /// </para>
    /// </summary>
    public string? XTenantId { get; init; }

    public required ResellerHandshakeBatchCreate Body { get; init; }
}
