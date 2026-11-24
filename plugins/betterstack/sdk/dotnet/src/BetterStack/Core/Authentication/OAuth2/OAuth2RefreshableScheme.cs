using System;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Threading;
using System.Threading.Tasks;

namespace BetterStack.Core.Authentication.OAuth2;

internal sealed class OAuth2RefreshableScheme<TCredentials> : IRevocableAuthScheme
    where TCredentials : IOAuth2Credentials
{
    private readonly TCredentials _credentials;
    private readonly IOAuth2RefreshableTokenStrategy<TCredentials> _strategy;
    private readonly string? _scope;
    private readonly TimeProvider _clock;
    private volatile OAuthTokenRefreshable? _cachedToken;
    private string? _refreshToken;
    private readonly AsyncLock _lock = new();

    public OAuth2RefreshableScheme(
        TCredentials credentials,
        IOAuth2RefreshableTokenStrategy<TCredentials> strategy,
        string? scope,
        TimeProvider clock)
    {
        _credentials = credentials;
        _strategy = strategy;
        _scope = scope;
        _clock = clock;
    }

    public async ValueTask<AuthOutcome> Apply(HttpRequestMessage request, CancellationToken cancellationToken)
    {
        var token = await GetAndCacheToken(cancellationToken).ConfigureAwait(false);
        request.Headers.Authorization = new AuthenticationHeaderValue("Bearer", token.AccessToken);
        return AuthOutcome.Applied;
    }

    public async ValueTask Invalidate(HttpRequestMessage rejected, CancellationToken cancellationToken)
    {
        var header = rejected.Headers.Authorization;
        if (header?.Parameter is null || !string.Equals(header.Scheme, "Bearer", StringComparison.OrdinalIgnoreCase))
            return;

        var cached = _cachedToken;
        if (cached is null || cached.AccessToken != header.Parameter)
            return;

        using (await _lock.LockAsync(cancellationToken).ConfigureAwait(false))
        {
            if (_cachedToken is { } current && current.AccessToken == header.Parameter)
                _cachedToken = null;
        }
    }

    private async ValueTask<OAuthTokenRefreshable> GetAndCacheToken(CancellationToken ct)
    {
        var cached = _cachedToken;
        if (cached is not null && !cached.IsExpired(_clock.GetUtcNow()))
            return cached;

        using (await _lock.LockAsync(ct).ConfigureAwait(false))
        {
            cached = _cachedToken;
            if (cached is not null && !cached.IsExpired(_clock.GetUtcNow()))
                return cached;

            // Attempt a silent refresh whenever a refresh token is on hand
            if (_refreshToken is { } refreshToken)
            {
                var refreshed = await _strategy.TryRefreshToken(_credentials, refreshToken, ct).ConfigureAwait(false);
                if (refreshed is not null)
                {
                    // RFC 6749 §6: AS may omit refresh_token from the response;
                    // preserve the previously-issued refresh token in that case.
                    _refreshToken = refreshed.RefreshToken ?? refreshToken;
                    var renewed = refreshed with
                    {
                        RefreshToken = _refreshToken,
                        ReceivedAt = _clock.GetUtcNow(),
                    };
                    _cachedToken = renewed;
                    return renewed;
                }

                _refreshToken = null;
            }

            var fetched = await _strategy.GetToken(_credentials, _credentials.Scope ?? _scope, ct).ConfigureAwait(false);
            _refreshToken = fetched.RefreshToken;
            var token = fetched with { ReceivedAt = _clock.GetUtcNow() };
            _cachedToken = token;
            return token;
        }
    }
}

internal static class OAuth2RefreshableSchemeExtensions
{
    extension<TCredentials>(OAuth2RefreshableScheme<TCredentials>) where TCredentials : IOAuth2Credentials
    {
        public static IAuthScheme Create(
            string name,
            TCredentials? credentials,
            IOAuth2RefreshableTokenStrategy<TCredentials> strategy,
            TimeProvider clock,
            string? scope) =>
            credentials is not null
                ? new OAuth2RefreshableScheme<TCredentials>(credentials, strategy, scope, clock)
                : new UnconfiguredAuthScheme(name);
    }
}
