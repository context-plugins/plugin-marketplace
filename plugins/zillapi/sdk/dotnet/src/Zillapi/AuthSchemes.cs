using Zillapi.Core;
using Zillapi.Core.Authentication;
using Zillapi.Core.Authentication.Bearer;

namespace Zillapi;

internal sealed class AuthSchemes
{
    public IAuthScheme BearerAuth { get; }

    public AuthSchemes(ZillapiClientOptions options)
    {
        BearerAuth =
            BearerAuthScheme.Create(
                "BearerAuth",
                options.BearerAuthProvider,
                options.BearerAuth ?? EnvironmentVariables.Get("ZILLAPI_BEARER_AUTH"));
    }
}
