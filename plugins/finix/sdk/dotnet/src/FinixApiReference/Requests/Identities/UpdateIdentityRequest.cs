using FinixApiReference.Models;

namespace FinixApiReference.Requests.Identities;

/// <summary>
/// The inputs of the UpdateIdentity operation.
/// </summary>
public sealed record UpdateIdentityRequest
{
    /// <summary>
    /// The <c>Identity</c> ID.
    /// </summary>
    public required string IdentityId { get; init; }

    public required UpdateIdentity Body { get; init; }
}
