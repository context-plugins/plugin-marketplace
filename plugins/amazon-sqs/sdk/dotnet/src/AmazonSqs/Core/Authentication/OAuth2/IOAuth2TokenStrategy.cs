using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;

namespace AmazonSqs.Core.Authentication.OAuth2;

/// <summary>
/// Token acquisition strategy for OAuth2 grant types where the scheme does not manage refresh
/// tokens (Client Credentials). For grant types that may issue refresh tokens, see
/// <see cref="IOAuth2RefreshableTokenStrategy{TCredentials}"/>.
/// Caching is handled by <see cref="OAuth2Scheme{TCredentials}"/>, which keeps one token per scope
/// set and passes the scope set to request as <c>scope</c>.
/// </summary>
internal interface IOAuth2TokenStrategy<in TCredentials>
{
    Task<OAuthToken> GetToken(TCredentials credentials, string? scope, CancellationToken cancellationToken);
}

/// <summary>
/// Token acquisition strategy for OAuth2 grant types that can issue refresh tokens
/// (Authorization Code and Resource Owner Password Credentials).
/// Caching and refresh-then-fallthrough logic are handled by
/// <see cref="OAuth2RefreshableScheme{TCredentials}"/>.
/// </summary>
internal interface IOAuth2RefreshableTokenStrategy<in TCredentials>
{
    Task<OAuthTokenRefreshable> GetToken(TCredentials credentials, string? scope, CancellationToken cancellationToken);

    /// <summary>
    /// Attempts to refresh an expired token. Returns <c>null</c> to signal that
    /// the refresh failed — the caller will then invoke <see cref="GetToken"/> to
    /// perform a fresh authentication.
    /// </summary>
    Task<OAuthTokenRefreshable?> TryRefreshToken(
        TCredentials credentials,
        string refreshToken,
        CancellationToken cancellationToken);
}

internal interface IOAuth2Credentials
{
    string? Scope { get; }
}

internal delegate IReadOnlyList<T> CredentialParamsFactory<out T>(string clientId, string? clientSecret);
