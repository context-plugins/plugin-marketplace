using Compabase.Core;
using Compabase.Core.Authentication;
using Compabase.Core.Authentication.ApiKey;
using Compabase.Core.Authentication.Bearer;

namespace Compabase;

internal sealed class AuthSchemes
{
    public IAuthScheme ApiKeyAuth { get; }
    public IAuthScheme BearerAuth { get; }

    public AuthSchemes(CompabaseClientOptions options)
    {
        ApiKeyAuth =
            ApiKeyHeaderScheme.Create(
                "ApiKeyAuth",
                "X-API-Key",
                options.ApiKeyAuthProvider,
                options.ApiKeyAuth ?? EnvironmentVariables.Get("COMPABASE_API_KEY_AUTH"));
        BearerAuth =
            BearerAuthScheme.Create(
                "BearerAuth",
                options.BearerAuthProvider,
                options.BearerAuth ?? EnvironmentVariables.Get("COMPABASE_BEARER_AUTH"));
    }
}
