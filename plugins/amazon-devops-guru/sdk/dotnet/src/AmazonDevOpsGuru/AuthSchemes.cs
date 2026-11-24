using AmazonDevOpsGuru.Core;
using AmazonDevOpsGuru.Core.Authentication;
using AmazonDevOpsGuru.Core.Authentication.ApiKey;

namespace AmazonDevOpsGuru;

internal sealed class AuthSchemes
{
    public IAuthScheme Sigv4 { get; }

    public AuthSchemes(AmazonDevOpsGuruClientOptions options)
    {
        Sigv4 =
            ApiKeyHeaderScheme.Create(
                "Sigv4",
                "Authorization",
                options.Sigv4Provider,
                options.Sigv4 ?? EnvironmentVariables.Get("AMAZON_DEV_OPS_GURU_SIGV4"));
    }
}
