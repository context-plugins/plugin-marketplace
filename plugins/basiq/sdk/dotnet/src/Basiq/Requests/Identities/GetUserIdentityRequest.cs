namespace Basiq.Requests.Identities;

/// <summary>
/// The inputs of the GetUserIdentity operation.
/// </summary>
public sealed record GetUserIdentityRequest
{
    /// <summary>
    /// User identifier.
    /// </summary>
    public required string UserId { get; init; }

    /// <summary>
    /// Identity identifier.
    /// </summary>
    public required string IdentityId { get; init; }
}
