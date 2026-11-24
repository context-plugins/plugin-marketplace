using AwsDirectConnect.Core;
using AwsDirectConnect.Core.Authentication;
using AwsDirectConnect.Core.Authentication.ApiKey;

namespace AwsDirectConnect;

internal sealed class AuthSchemes
{
    public IAuthScheme Sigv4 { get; }

    public AuthSchemes(AwsDirectConnectClientOptions options)
    {
        Sigv4 =
            ApiKeyHeaderScheme.Create(
                "Sigv4",
                "Authorization",
                options.Sigv4Provider,
                options.Sigv4 ?? EnvironmentVariables.Get("AWS_DIRECT_CONNECT_SIGV4"));
    }
}
