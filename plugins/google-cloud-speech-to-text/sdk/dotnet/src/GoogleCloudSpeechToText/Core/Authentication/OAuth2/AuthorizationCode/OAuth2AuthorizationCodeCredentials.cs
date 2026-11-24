using System.Threading;
using System.Threading.Tasks;

namespace GoogleCloudSpeechToText.Core.Authentication.OAuth2.AuthorizationCode;

/// <summary>
/// Callback invoked by the SDK to get an OAuth2 authorization code from the user.
/// Blocks on a human — typically opens a browser, waits for the redirect to the configured
/// redirect URI, and returns the <c>code</c> query parameter from that redirect.
/// </summary>
/// <param name="authorizationUrl">
/// The fully built authorization URL with all required query parameters
/// (<c>client_id</c>, <c>redirect_uri</c>, <c>scope</c>, <c>state</c>, and the PKCE challenge
/// when PKCE is enabled).
/// </param>
/// <param name="ct">Token to observe while the user completes the authorization step.</param>
/// <returns>The authorization code returned by the authorization server in the redirect.</returns>
/// <remarks>
/// Invoked on initial token acquisition and again whenever the cached refresh-token grant fails.
/// The implementation owns navigating the user to <paramref name="authorizationUrl"/>, receiving
/// the redirect, and extracting the <c>code</c> from it.
/// </remarks>
public delegate Task<string> AuthorizationCodePrompt(string authorizationUrl, CancellationToken ct);

public sealed class OAuth2AuthorizationCodeCredentials : IOAuth2Credentials
{
    public required string ClientId { get; init; }
    public string? ClientSecret { get; init; }
    public required string RedirectUri { get; init; }
    public string? Scope { get; init; }
    public string? State { get; init; }
    /// <summary>
    /// The PKCE challenge method to use. Null disables PKCE, which requires <see cref="ClientSecret"/>.
    /// Defaults to <see cref="PkceMethod.S256"/> (RFC 7636 recommended).
    /// </summary>
    public PkceMethod? Pkce { get; init; } = PkceMethod.S256;

    /// <summary>
    /// Required callback that gets the authorization code from the user. See
    /// <see cref="AuthorizationCodePrompt"/> for the expected behavior and lifecycle.
    /// </summary>
    public required AuthorizationCodePrompt PromptForAuthorizationCode { get; init; }
}
