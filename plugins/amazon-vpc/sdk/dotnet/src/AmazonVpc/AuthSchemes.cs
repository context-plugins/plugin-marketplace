using AmazonVpc.Core;
using AmazonVpc.Core.Authentication;
using AmazonVpc.Core.Authentication.ApiKey;

namespace AmazonVpc;

internal sealed class AuthSchemes
{
    public IAuthScheme Sigv4Auth { get; }

    public AuthSchemes(AmazonVpcClientOptions options)
    {
        Sigv4Auth =
            ApiKeyHeaderScheme.Create(
                "Sigv4Auth",
                "Authorization",
                options.Sigv4AuthProvider,
                options.Sigv4Auth ?? EnvironmentVariables.Get("AMAZON_VPC_SIGV4_AUTH"));
    }
}
