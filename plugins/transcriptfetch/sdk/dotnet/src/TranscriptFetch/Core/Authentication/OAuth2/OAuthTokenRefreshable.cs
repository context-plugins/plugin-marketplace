using System.Text.Json.Serialization;

namespace TranscriptFetch.Core.Authentication.OAuth2;

/// <summary>
/// Extends <see cref="OAuthToken"/> with an optional refresh token for grant types that may
/// include one: <b>Authorization Code</b> (RFC 6749 §4.1.4 — OPTIONAL) and
/// <b>Resource Owner Password Credentials</b> (RFC 6749 §4.3.3 — OPTIONAL).
/// </summary>
/// <remarks>
/// <see cref="RefreshToken"/> is optional — the authorization server issues one at its discretion.
/// When present and the access token expires, the scheme will attempt a silent refresh before
/// falling back to a full re-authorization if the refresh token has been revoked or has itself
/// expired.
/// </remarks>
internal sealed record OAuthTokenRefreshable : OAuthToken
{
    /// <summary>
    /// Issued at the authorization server's discretion — <c>null</c> when the server does not
    /// include one.
    /// </summary>
    [JsonPropertyName("refresh_token")]
    public string? RefreshToken { get; init; }
}
