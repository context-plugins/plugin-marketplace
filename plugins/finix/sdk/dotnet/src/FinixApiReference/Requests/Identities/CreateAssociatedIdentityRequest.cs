using FinixApiReference.Models;

namespace FinixApiReference.Requests.Identities;

/// <summary>
/// The inputs of the CreateAssociatedIdentity operation.
/// </summary>
public sealed record CreateAssociatedIdentityRequest
{
    /// <summary>
    /// The <c>Identity</c> ID of the beneficial owner from which you wish to create the associated identity.
    /// </summary>
    public required string IdentityId { get; init; }

    public required CreateAssociatedIdentity Body { get; init; }
}
