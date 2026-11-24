using AmazonSqs.Core;
using AmazonSqs.Core.Authentication;
using AmazonSqs.Core.Authentication.ApiKey;

namespace AmazonSqs;

internal sealed class AuthSchemes
{
    public IAuthScheme Sigv4 { get; }

    public AuthSchemes(AmazonSqsClientOptions options)
    {
        Sigv4 =
            ApiKeyHeaderScheme.Create(
                "Sigv4",
                "Authorization",
                options.Sigv4Provider,
                options.Sigv4 ?? EnvironmentVariables.Get("AMAZON_SQS_SIGV4"));
    }
}
