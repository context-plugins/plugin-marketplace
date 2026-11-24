using System;
using System.Collections.Concurrent;
using System.Linq;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Threading;
using System.Threading.Tasks;

namespace Clix.Core.Authentication.OAuth2;

internal sealed class OAuth2Scheme<TCredentials> : IRevocableAuthScheme, IScopedAuthScheme
    where TCredentials : IOAuth2Credentials
{
    private readonly TCredentials _credentials;
    private readonly IOAuth2TokenStrategy<TCredentials> _strategy;
    private readonly TimeProvider _clock;
    private readonly Slot _default;
    private readonly ConcurrentDictionary<string, Slot> _slots = new(StringComparer.Ordinal);

    public OAuth2Scheme(TCredentials credentials, IOAuth2TokenStrategy<TCredentials> strategy, TimeProvider clock)
    {
        _credentials = credentials;
        _strategy = strategy;
        _clock = clock;
        _default = new Slot(this, scope: null);
    }

    public ValueTask<AuthOutcome> Apply(HttpRequestMessage request, CancellationToken cancellationToken) =>
        _default.Apply(request, cancellationToken);

    public ValueTask Invalidate(HttpRequestMessage rejected, CancellationToken cancellationToken) =>
        _default.Invalidate(rejected, cancellationToken);

    public IAuthScheme ForScopes(ReadOnlySpan<string> scopes)
    {
        if (scopes.IsEmpty || _credentials.Scope is not null)
            return this;

        return _slots.GetOrAdd(OAuth2Scopes.Join(scopes), scope => new Slot(this, scope));
    }

    private sealed class Slot(OAuth2Scheme<TCredentials> owner, string? scope) : IRevocableAuthScheme
    {
        private volatile OAuthToken? _cachedToken;
        private readonly AsyncLock _lock = new();

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

        private async ValueTask<OAuthToken> GetAndCacheToken(CancellationToken ct)
        {
            var cached = _cachedToken;
            if (cached is not null && !cached.IsExpired(owner._clock.GetUtcNow()))
                return cached;

            using (await _lock.LockAsync(ct).ConfigureAwait(false))
            {
                cached = _cachedToken;
                if (cached is not null && !cached.IsExpired(owner._clock.GetUtcNow()))
                    return cached;

                var fetched = await owner._strategy.GetToken(owner._credentials, scope ?? owner._credentials.Scope, ct).ConfigureAwait(false);
                var token = fetched with { ReceivedAt = owner._clock.GetUtcNow() };
                _cachedToken = token;
                return token;
            }
        }
    }
}

file static class OAuth2Scopes
{
    public static string Join(ReadOnlySpan<string> scopes)
    {
        var sorted = scopes.ToArray();
        Array.Sort(sorted, StringComparer.Ordinal);
        return string.Join(" ", sorted.Distinct());
    }
}

internal static class OAuth2SchemeExtensions
{
    extension<TCredentials>(OAuth2Scheme<TCredentials>) where TCredentials : IOAuth2Credentials
    {
        public static IAuthScheme Create(
            string name,
            TCredentials? credentials,
            IOAuth2TokenStrategy<TCredentials> strategy,
            TimeProvider clock) =>
            credentials is not null
                ? new OAuth2Scheme<TCredentials>(credentials, strategy, clock)
                : new UnconfiguredAuthScheme(name);
    }
}
