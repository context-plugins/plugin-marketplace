using Rendex.Core;
using Rendex.Core.Authentication;
using Rendex.Core.Authentication.ApiKey;
using Rendex.Core.Authentication.Bearer;

namespace Rendex;

internal sealed class AuthSchemes
{
    public IAuthScheme BearerAuth { get; }
    public IAuthScheme ApiKeyHeader { get; }
    public IAuthScheme ApiKeyQuery { get; }

    public AuthSchemes(RendexClientOptions options)
    {
        BearerAuth =
            BearerAuthScheme.Create(
                "BearerAuth",
                options.BearerAuthProvider,
                options.BearerAuth ?? EnvironmentVariables.Get("RENDEX_BEARER_AUTH"));
        ApiKeyHeader =
            ApiKeyHeaderScheme.Create(
                "ApiKeyHeader",
                "x-api-key",
                options.ApiKeyHeaderProvider,
                options.ApiKeyHeader ?? EnvironmentVariables.Get("RENDEX_API_KEY_HEADER"));
        ApiKeyQuery =
            ApiKeyQueryScheme.Create(
                "ApiKeyQuery",
                "key",
                options.ApiKeyQueryProvider,
                options.ApiKeyQuery ?? EnvironmentVariables.Get("RENDEX_API_KEY_QUERY"));
    }
}
