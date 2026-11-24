using AwsStorageGateway.Core;
using AwsStorageGateway.Core.Authentication;
using AwsStorageGateway.Core.Authentication.ApiKey;

namespace AwsStorageGateway;

internal sealed class AuthSchemes
{
    public IAuthScheme Sigv4 { get; }

    public AuthSchemes(AwsStorageGatewayClientOptions options)
    {
        Sigv4 =
            ApiKeyHeaderScheme.Create(
                "Sigv4",
                "Authorization",
                options.Sigv4Provider,
                options.Sigv4 ?? EnvironmentVariables.Get("AWS_STORAGE_GATEWAY_SIGV4"));
    }
}
