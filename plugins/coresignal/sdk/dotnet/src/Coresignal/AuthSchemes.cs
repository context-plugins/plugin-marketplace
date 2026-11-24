using Coresignal.Core;
using Coresignal.Core.Authentication;
using Coresignal.Core.Authentication.ApiKey;

namespace Coresignal;

internal sealed class AuthSchemes
{
    public IAuthScheme ApiKey { get; }

    public AuthSchemes(CoresignalClientOptions options)
    {
        ApiKey =
            ApiKeyHeaderScheme.Create(
                "ApiKey",
                "apikey",
                options.ApiKeyProvider,
                options.ApiKey ?? EnvironmentVariables.Get("CORESIGNAL_API_KEY"));
    }
}
