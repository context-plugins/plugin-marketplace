using StayingApi.Core;
using StayingApi.Core.Authentication;
using StayingApi.Core.Authentication.Bearer;

namespace StayingApi;

internal sealed class AuthSchemes
{
    public IAuthScheme BearerAuth { get; }

    public AuthSchemes(StayingApiClientOptions options)
    {
        BearerAuth =
            BearerAuthScheme.Create(
                "BearerAuth",
                options.BearerAuthProvider,
                options.BearerAuth ?? EnvironmentVariables.Get("STAYING_API_BEARER_AUTH"));
    }
}
