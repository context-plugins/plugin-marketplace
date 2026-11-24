using UiPath.Core;
using UiPath.Core.Authentication;
using UiPath.Core.Authentication.ApiKey;
using UiPath.Core.Authentication.Bearer;

namespace UiPath;

internal sealed class AuthSchemes
{
    public IAuthScheme BearerAuth { get; }
    public IAuthScheme ApiKeyAuth { get; }

    public AuthSchemes(UiPathClientOptions options)
    {
        BearerAuth =
            BearerAuthScheme.Create(
                "BearerAuth",
                options.BearerAuthProvider,
                options.BearerAuth ?? EnvironmentVariables.Get("UI_PATH_BEARER_AUTH"));
        ApiKeyAuth =
            ApiKeyHeaderScheme.Create(
                "ApiKeyAuth",
                "Authorization",
                options.ApiKeyAuthProvider,
                options.ApiKeyAuth ?? EnvironmentVariables.Get("UI_PATH_API_KEY_AUTH"));
    }
}
