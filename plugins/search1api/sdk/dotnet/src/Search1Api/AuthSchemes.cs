using Search1Api.Core;
using Search1Api.Core.Authentication;
using Search1Api.Core.Authentication.Bearer;

namespace Search1Api;

internal sealed class AuthSchemes
{
    public IAuthScheme BearerAuth { get; }

    public AuthSchemes(Search1ApiClientOptions options)
    {
        BearerAuth =
            BearerAuthScheme.Create(
                "BearerAuth",
                options.BearerAuthProvider,
                options.BearerAuth ?? EnvironmentVariables.Get("SEARCH1_API_BEARER_AUTH"));
    }
}
