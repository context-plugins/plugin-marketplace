namespace Basiq.Requests.AuthLinks;

/// <summary>
/// The inputs of the GetAuthLink operation.
/// </summary>
public sealed record GetAuthLinkRequest
{
    /// <summary>
    /// The identifier of the user.
    /// </summary>
    public required string UserId { get; init; }
}
