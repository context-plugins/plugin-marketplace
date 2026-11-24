namespace Basiq.Requests.Identities;

/// <summary>
/// The inputs of the GetUserIdentities operation.
/// </summary>
public sealed record GetUserIdentitiesRequest
{
    /// <summary>
    /// User identifier.
    /// </summary>
    public required string UserId { get; init; }
}
