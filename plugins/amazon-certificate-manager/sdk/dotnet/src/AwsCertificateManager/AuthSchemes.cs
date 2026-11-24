using AwsCertificateManager.Core;
using AwsCertificateManager.Core.Authentication;
using AwsCertificateManager.Core.Authentication.ApiKey;

namespace AwsCertificateManager;

internal sealed class AuthSchemes
{
    public IAuthScheme Sigv4 { get; }

    public AuthSchemes(AwsCertificateManagerClientOptions options)
    {
        Sigv4 =
            ApiKeyHeaderScheme.Create(
                "Sigv4",
                "Authorization",
                options.Sigv4Provider,
                options.Sigv4 ?? EnvironmentVariables.Get("AWS_CERTIFICATE_MANAGER_SIGV4"));
    }
}
