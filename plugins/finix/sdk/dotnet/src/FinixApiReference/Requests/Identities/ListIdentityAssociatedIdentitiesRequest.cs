using FinixApiReference.Core.Validation.Attributes;

namespace FinixApiReference.Requests.Identities;

/// <summary>
/// The inputs of the ListIdentityAssociatedIdentities operation.
/// </summary>
public sealed record ListIdentityAssociatedIdentitiesRequest
{
    /// <summary>
    /// The <c>Identity</c> ID of the beneficial owner from which you wish to create the associated identity.
    /// </summary>
    public required string IdentityId { get; init; }

    /// <summary>
    /// The numbers of items to return.
    /// </summary>
    [Maximum(100)]
    public int? Limit { get; init; }

    /// <summary>
    /// Return every resource created after the cursor value.
    /// </summary>
    public string? AfterCursor { get; init; }

    /// <summary>
    /// Return every resource created before the cursor value.
    /// </summary>
    public string? BeforeCursor { get; init; }
}
