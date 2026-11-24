using System;
using System.Linq;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;

namespace Fillo.Core.Authentication.ApiKey;

internal sealed class ApiKeyCookieScheme : IAuthScheme
{
    private readonly string _name;
    private readonly string _cookieName;
    private readonly CredentialProvider<string> _provider;

    public ApiKeyCookieScheme(string name, string cookieName, CredentialProvider<string> provider)
    {
        _name = name;
        _cookieName = cookieName;
        _provider = provider;
    }

    // RFC 6265: merge into a single Cookie header, replacing any existing value for this name
    public async ValueTask<AuthOutcome> Apply(HttpRequestMessage request, CancellationToken cancellationToken)
    {
        var apiKey = await _provider(cancellationToken).ConfigureAwait(false);
        if (apiKey is null)
            return AuthOutcome.Unsatisfied(_name);

        var newCookie = $"{_cookieName}={Uri.EscapeDataString(apiKey)}";

        request.Headers.TryGetValues("Cookie", out var existing);
        request.Headers.Remove("Cookie");

        if (existing is null)
        {
            request.Headers.Add("Cookie", newCookie);
            return AuthOutcome.Applied;
        }

        var replacePrefix = _cookieName + "=";
        var otherCookies = existing
            .SelectMany(h => h.Split([';'], StringSplitOptions.RemoveEmptyEntries))
            .Select(c => c.Trim())
            .Where(c => !c.StartsWith(replacePrefix, StringComparison.OrdinalIgnoreCase));

        request.Headers.Add("Cookie", string.Join("; ", otherCookies.Append(newCookie)));
        return AuthOutcome.Applied;
    }
}

internal static class ApiKeyCookieSchemeExtensions
{
    extension(ApiKeyCookieScheme)
    {
        public static IAuthScheme Create(string name, string cookieName, CredentialProvider<string>? provider, string? value) =>
            (provider ?? CredentialProvider.Constant(value)) is { } resolved
                ? new ApiKeyCookieScheme(name, cookieName, resolved)
                : new UnconfiguredAuthScheme(name);
    }
}
