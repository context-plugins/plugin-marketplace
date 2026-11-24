using AmazonComprehend.Core;
using AmazonComprehend.Core.Authentication;
using AmazonComprehend.Core.Authentication.ApiKey;

namespace AmazonComprehend;

internal sealed class AuthSchemes
{
    public IAuthScheme Sigv4 { get; }

    public AuthSchemes(AmazonComprehendClientOptions options)
    {
        Sigv4 =
            ApiKeyHeaderScheme.Create(
                "Sigv4",
                "Authorization",
                options.Sigv4Provider,
                options.Sigv4 ?? EnvironmentVariables.Get("AMAZON_COMPREHEND_SIGV4"));
    }
}
