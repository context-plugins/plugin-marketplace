using Cubic.Core;
using Cubic.Core.Authentication;
using Cubic.Core.Authentication.Bearer;

namespace Cubic;

internal sealed class AuthSchemes
{
    public IAuthScheme AnalyticsApiKey { get; }

    public AuthSchemes(CubicClientOptions options)
    {
        AnalyticsApiKey =
            BearerAuthScheme.Create(
                "AnalyticsApiKey",
                options.AnalyticsApiKeyProvider,
                options.AnalyticsApiKey ?? EnvironmentVariables.Get("CUBIC_ANALYTICS_API_KEY"));
    }
}
