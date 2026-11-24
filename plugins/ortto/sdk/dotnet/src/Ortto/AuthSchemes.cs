using Ortto.Core;
using Ortto.Core.Authentication;
using Ortto.Core.Authentication.ApiKey;

namespace Ortto;

internal sealed class AuthSchemes
{
    public IAuthScheme ApiKeyAuth { get; }

    public AuthSchemes(OrttoClientOptions options)
    {
        ApiKeyAuth =
            ApiKeyHeaderScheme.Create(
                "ApiKeyAuth",
                "X-Api-Key",
                options.ApiKeyAuthProvider,
                options.ApiKeyAuth ?? EnvironmentVariables.Get("ORTTO_API_KEY_AUTH"));
    }
}
