using AwsCodeBuild.Core;
using AwsCodeBuild.Core.Authentication;
using AwsCodeBuild.Core.Authentication.ApiKey;

namespace AwsCodeBuild;

internal sealed class AuthSchemes
{
    public IAuthScheme Sigv4 { get; }

    public AuthSchemes(AwsCodeBuildClientOptions options)
    {
        Sigv4 =
            ApiKeyHeaderScheme.Create(
                "Sigv4",
                "Authorization",
                options.Sigv4Provider,
                options.Sigv4 ?? EnvironmentVariables.Get("AWS_CODE_BUILD_SIGV4"));
    }
}
