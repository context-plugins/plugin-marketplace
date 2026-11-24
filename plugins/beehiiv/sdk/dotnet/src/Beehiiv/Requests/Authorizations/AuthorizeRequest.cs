using Beehiiv.Models.Enums;

namespace Beehiiv.Requests.Authorizations;

/// <summary>
/// The inputs of the Authorize operation.
/// </summary>
public sealed record AuthorizeRequest
{
    /// <summary>
    /// The OAuth application client ID (<c>uid</c>).
    /// </summary>
    public required string ClientId { get; init; }

    /// <summary>
    /// Must exactly match one of the app's configured redirect URIs.
    /// </summary>
    public required string RedirectUri { get; init; }

    /// <summary>
    /// Must be <c>code</c> for the authorization code flow.
    /// </summary>
    public required string ResponseType { get; init; }

    /// <summary>
    /// Space-delimited list of requested scopes.
    /// </summary>
    public string? Scope { get; init; }

    /// <summary>
    /// Opaque value returned to your callback for CSRF protection.
    /// </summary>
    public string? State { get; init; }

    /// <summary>
    /// PKCE code challenge. Required for public clients.
    /// </summary>
    public string? CodeChallenge { get; init; }

    /// <summary>
    /// PKCE challenge method (<c>plain</c> or <c>S256</c>). Required for public clients when using PKCE.
    /// </summary>
    public CodeChallengeMethod? CodeChallengeMethod { get; init; }
}
