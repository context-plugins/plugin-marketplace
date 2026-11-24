using Perigon.Core;
using Perigon.Core.Authentication;
using Perigon.Core.Authentication.Bearer;

namespace Perigon;

internal sealed class AuthSchemes
{
    public IAuthScheme ApiKeyAuth { get; }

    public AuthSchemes(PerigonClientOptions options)
    {
        ApiKeyAuth =
            BearerAuthScheme.Create(
                "ApiKeyAuth",
                options.ApiKeyAuthProvider,
                options.ApiKeyAuth ?? EnvironmentVariables.Get("PERIGON_API_KEY_AUTH"));
    }
}
