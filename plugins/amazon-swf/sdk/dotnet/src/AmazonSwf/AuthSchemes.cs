using AmazonSwf.Core;
using AmazonSwf.Core.Authentication;
using AmazonSwf.Core.Authentication.ApiKey;

namespace AmazonSwf;

internal sealed class AuthSchemes
{
    public IAuthScheme Sigv4 { get; }

    public AuthSchemes(AmazonSwfClientOptions options)
    {
        Sigv4 =
            ApiKeyHeaderScheme.Create(
                "Sigv4",
                "Authorization",
                options.Sigv4Provider,
                options.Sigv4 ?? EnvironmentVariables.Get("AMAZON_SWF_SIGV4"));
    }
}
