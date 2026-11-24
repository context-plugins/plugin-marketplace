using Basiq.Core;
using Basiq.Core.Authentication;
using Basiq.Core.Authentication.ApiKey;
using Basiq.Core.Authentication.Bearer;

namespace Basiq;

internal sealed class AuthSchemes
{
    public IAuthScheme ApiKey { get; }
    public IAuthScheme ServicesToken { get; }

    public AuthSchemes(BasiqClientOptions options)
    {
        ApiKey =
            ApiKeyHeaderScheme.Create(
                "ApiKey",
                "Authorization",
                options.ApiKeyProvider,
                options.ApiKey ?? EnvironmentVariables.Get("BASIQ_API_KEY"));
        ServicesToken =
            BearerAuthScheme.Create(
                "ServicesToken",
                options.ServicesTokenProvider,
                options.ServicesToken ?? EnvironmentVariables.Get("BASIQ_SERVICES_TOKEN"));
    }
}
