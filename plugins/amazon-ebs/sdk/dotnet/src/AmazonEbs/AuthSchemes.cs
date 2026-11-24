using AmazonEbs.Core;
using AmazonEbs.Core.Authentication;
using AmazonEbs.Core.Authentication.ApiKey;

namespace AmazonEbs;

internal sealed class AuthSchemes
{
    public IAuthScheme Sigv4 { get; }

    public AuthSchemes(AmazonEbsClientOptions options)
    {
        Sigv4 =
            ApiKeyHeaderScheme.Create(
                "Sigv4",
                "Authorization",
                options.Sigv4Provider,
                options.Sigv4 ?? EnvironmentVariables.Get("AMAZON_EBS_SIGV4"));
    }
}
