namespace Basiq.Requests.AuthLinks;

/// <summary>
/// The inputs of the DeleteAuthLink operation.
/// </summary>
public sealed record DeleteAuthLinkRequest
{
    /// <summary>
    /// The identifier of the user.
    /// </summary>
    public required string UserId { get; init; }
}
