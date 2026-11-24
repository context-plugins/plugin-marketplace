using Fellow.Core;
using Fellow.Core.Authentication;
using Fellow.Core.Authentication.ApiKey;

namespace Fellow;

internal sealed class AuthSchemes
{
    public IAuthScheme DeveloperApiKeyAuth { get; }

    public AuthSchemes(FellowClientOptions options)
    {
        DeveloperApiKeyAuth =
            ApiKeyHeaderScheme.Create(
                "DeveloperApiKeyAuth",
                "X-API-KEY",
                options.DeveloperApiKeyAuthProvider,
                options.DeveloperApiKeyAuth ?? EnvironmentVariables.Get("FELLOW_DEVELOPER_API_KEY_AUTH"));
    }
}
