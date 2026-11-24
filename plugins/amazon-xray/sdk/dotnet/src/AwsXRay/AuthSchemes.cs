using AwsXRay.Core;
using AwsXRay.Core.Authentication;
using AwsXRay.Core.Authentication.ApiKey;

namespace AwsXRay;

internal sealed class AuthSchemes
{
    public IAuthScheme Sigv4 { get; }

    public AuthSchemes(AwsXRayClientOptions options)
    {
        Sigv4 =
            ApiKeyHeaderScheme.Create(
                "Sigv4",
                "Authorization",
                options.Sigv4Provider,
                options.Sigv4 ?? EnvironmentVariables.Get("AWS_XRAY_SIGV4"));
    }
}
