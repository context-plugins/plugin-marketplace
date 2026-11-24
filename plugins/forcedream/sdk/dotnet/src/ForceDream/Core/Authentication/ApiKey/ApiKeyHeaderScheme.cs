using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;

namespace ForceDream.Core.Authentication.ApiKey;

internal sealed class ApiKeyHeaderScheme : IAuthScheme
{
    private readonly string _name;
    private readonly string _headerName;
    private readonly CredentialProvider<string> _provider;

    public ApiKeyHeaderScheme(string name, string headerName, CredentialProvider<string> provider)
    {
        _name = name;
        _headerName = headerName;
        _provider = provider;
    }

    public async ValueTask<AuthOutcome> Apply(HttpRequestMessage request, CancellationToken cancellationToken)
    {
        var apiKey = await _provider(cancellationToken).ConfigureAwait(false);
        if (apiKey is null)
            return AuthOutcome.Unsatisfied(_name);

        request.Headers.Remove(_headerName);
        request.Headers.Add(_headerName, apiKey);
        return AuthOutcome.Applied;
    }
}

internal static class ApiKeyHeaderSchemeExtensions
{
    extension(ApiKeyHeaderScheme)
    {
        public static IAuthScheme Create(string name, string headerName, CredentialProvider<string>? provider, string? value) =>
            (provider ?? CredentialProvider.Constant(value)) is { } resolved
                ? new ApiKeyHeaderScheme(name, headerName, resolved)
                : new UnconfiguredAuthScheme(name);
    }
}
