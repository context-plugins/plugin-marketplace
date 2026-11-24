using System;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;

namespace Perigon.Core.Authentication.ApiKey;

internal sealed class ApiKeyQueryScheme : IAuthScheme
{
    private readonly string _name;
    private readonly string _paramName;
    private readonly CredentialProvider<string> _provider;

    public ApiKeyQueryScheme(string name, string paramName, CredentialProvider<string> provider)
    {
        _name = name;
        _paramName = paramName;
        _provider = provider;
    }

    public async ValueTask<AuthOutcome> Apply(HttpRequestMessage request, CancellationToken cancellationToken)
    {
        var apiKey = await _provider(cancellationToken).ConfigureAwait(false);
        if (apiKey is null)
            return AuthOutcome.Unsatisfied(_name);

        request.RequestUri = AppendQueryParam(request.RequestUri, _paramName, apiKey);
        return AuthOutcome.Applied;
    }

    private static Uri AppendQueryParam(Uri? uri, string name, string value)
    {
        if (uri is null) throw new InvalidOperationException("RequestUri is null.");
        var builder = new UriBuilder(uri);
        var encodedParam = $"{Uri.EscapeDataString(name)}={Uri.EscapeDataString(value)}";
        var existing = builder.Query.TrimStart('?');
        builder.Query = existing is null or "" ? encodedParam : $"{existing}&{encodedParam}";
        return builder.Uri;
    }
}

internal static class ApiKeyQuerySchemeExtensions
{
    extension(ApiKeyQueryScheme)
    {
        public static IAuthScheme Create(string name, string paramName, CredentialProvider<string>? provider, string? value) =>
            (provider ?? CredentialProvider.Constant(value)) is { } resolved
                ? new ApiKeyQueryScheme(name, paramName, resolved)
                : new UnconfiguredAuthScheme(name);
    }
}
