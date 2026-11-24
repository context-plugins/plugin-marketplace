using Instacart.Core;
using Instacart.Core.Authentication;
using Instacart.Core.Authentication.ApiKey;
using Instacart.Core.Authentication.Bearer;

namespace Instacart;

internal sealed class AuthSchemes
{
    public IAuthScheme BearerAuth { get; }
    public IAuthScheme ApiKeyAuth { get; }

    public AuthSchemes(InstacartClientOptions options)
    {
        BearerAuth =
            BearerAuthScheme.Create(
                "BearerAuth",
                options.BearerAuthProvider,
                options.BearerAuth ?? EnvironmentVariables.Get("INSTACART_BEARER_AUTH"));
        ApiKeyAuth =
            ApiKeyHeaderScheme.Create(
                "ApiKeyAuth",
                "Authorization",
                options.ApiKeyAuthProvider,
                options.ApiKeyAuth ?? EnvironmentVariables.Get("INSTACART_API_KEY_AUTH"));
    }
}
