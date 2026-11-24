using Clix.Core;
using Clix.Core.Authentication;
using Clix.Core.Authentication.ApiKey;

namespace Clix;

internal sealed class AuthSchemes
{
    public IAuthScheme ProjectIdAuth { get; }
    public IAuthScheme ApiKeyAuth { get; }

    public AuthSchemes(ClixClientOptions options)
    {
        ProjectIdAuth =
            ApiKeyHeaderScheme.Create(
                "ProjectIdAuth",
                "X-Clix-Project-ID",
                options.ProjectIdAuthProvider,
                options.ProjectIdAuth ?? EnvironmentVariables.Get("CLIX_PROJECT_ID_AUTH"));
        ApiKeyAuth =
            ApiKeyHeaderScheme.Create(
                "ApiKeyAuth",
                "X-Clix-API-Key",
                options.ApiKeyAuthProvider,
                options.ApiKeyAuth ?? EnvironmentVariables.Get("CLIX_API_KEY_AUTH"));
    }
}
