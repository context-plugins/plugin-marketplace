using System.Net.Http;
using System.Net.Http.Headers;
using System.Threading;
using System.Threading.Tasks;

namespace DynamicFeed.Core.Authentication.Bearer;

internal sealed class BearerAuthScheme : IAuthScheme
{
    private readonly string _name;
    private readonly CredentialProvider<string> _provider;

    public BearerAuthScheme(string name, CredentialProvider<string> provider)
    {
        _name = name;
        _provider = provider;
    }

    public async ValueTask<AuthOutcome> Apply(HttpRequestMessage request, CancellationToken cancellationToken)
    {
        var token = await _provider(cancellationToken).ConfigureAwait(false);
        if (token is null)
            return AuthOutcome.Unsatisfied(_name);

        request.Headers.Authorization = new AuthenticationHeaderValue("Bearer", token);
        return AuthOutcome.Applied;
    }
}

internal static class BearerAuthSchemeExtensions
{
    extension(BearerAuthScheme)
    {
        public static IAuthScheme Create(string name, CredentialProvider<string>? provider, string? value) =>
            (provider ?? CredentialProvider.Constant(value)) is { } resolved
                ? new BearerAuthScheme(name, resolved)
                : new UnconfiguredAuthScheme(name);
    }
}
