using System.Net.Http;
using System.Net.Http.Headers;
using System.Threading;
using System.Threading.Tasks;

namespace Perigon.Core.Authentication.Basic;

internal sealed class BasicAuthScheme : IAuthScheme
{
    private readonly string _name;
    private readonly CredentialProvider<BasicAuthCredentials> _provider;

    public BasicAuthScheme(string name, CredentialProvider<BasicAuthCredentials> provider)
    {
        _name = name;
        _provider = provider;
    }

    public async ValueTask<AuthOutcome> Apply(HttpRequestMessage request, CancellationToken cancellationToken)
    {
        var credentials = await _provider(cancellationToken).ConfigureAwait(false);
        if (credentials is null)
            return AuthOutcome.Unsatisfied(_name);

        request.Headers.Authorization = new AuthenticationHeaderValue("Basic", credentials.Encode());
        return AuthOutcome.Applied;
    }
}

internal static class BasicAuthSchemeExtensions
{
    extension(BasicAuthScheme)
    {
        public static IAuthScheme Create(string name, CredentialProvider<BasicAuthCredentials>? provider, BasicAuthCredentials? value) =>
            (provider ?? CredentialProvider.Constant(value)) is { } resolved
                ? new BasicAuthScheme(name, resolved)
                : new UnconfiguredAuthScheme(name);
    }
}
