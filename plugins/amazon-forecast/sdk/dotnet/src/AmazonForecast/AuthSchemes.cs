using AmazonForecast.Core;
using AmazonForecast.Core.Authentication;
using AmazonForecast.Core.Authentication.ApiKey;

namespace AmazonForecast;

internal sealed class AuthSchemes
{
    public IAuthScheme Sigv4 { get; }

    public AuthSchemes(AmazonForecastClientOptions options)
    {
        Sigv4 =
            ApiKeyHeaderScheme.Create(
                "Sigv4",
                "Authorization",
                options.Sigv4Provider,
                options.Sigv4 ?? EnvironmentVariables.Get("AMAZON_FORECAST_SIGV4"));
    }
}
