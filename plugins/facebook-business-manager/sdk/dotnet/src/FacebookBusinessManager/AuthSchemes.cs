using FacebookBusinessManager.Core;
using FacebookBusinessManager.Core.Authentication;
using FacebookBusinessManager.Core.Authentication.Bearer;

namespace FacebookBusinessManager;

internal sealed class AuthSchemes
{
    public IAuthScheme BearerAuth { get; }

    public AuthSchemes(FacebookBusinessManagerClientOptions options)
    {
        BearerAuth =
            BearerAuthScheme.Create(
                "BearerAuth",
                options.BearerAuthProvider,
                options.BearerAuth ?? EnvironmentVariables.Get("FACEBOOK_BUSINESS_MANAGER_BEARER_AUTH"));
    }
}
