using Apibara.Core;
using Apibara.Core.Authentication;
using Apibara.Core.Authentication.ApiKey;

namespace Apibara;

internal sealed class AuthSchemes
{
    public IAuthScheme ApiKeyAuth { get; }

    public AuthSchemes(ApibaraClientOptions options)
    {
        ApiKeyAuth =
            ApiKeyHeaderScheme.Create(
                "ApiKeyAuth",
                "X-API-Key",
                options.ApiKeyAuthProvider,
                options.ApiKeyAuth ?? EnvironmentVariables.Get("APIBARA_API_KEY_AUTH"));
    }
}
