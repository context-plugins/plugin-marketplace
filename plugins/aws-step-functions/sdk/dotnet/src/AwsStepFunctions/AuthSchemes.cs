using AwsStepFunctions.Core;
using AwsStepFunctions.Core.Authentication;
using AwsStepFunctions.Core.Authentication.ApiKey;

namespace AwsStepFunctions;

internal sealed class AuthSchemes
{
    public IAuthScheme Sigv4 { get; }

    public AuthSchemes(AwsStepFunctionsClientOptions options)
    {
        Sigv4 =
            ApiKeyHeaderScheme.Create(
                "Sigv4",
                "Authorization",
                options.Sigv4Provider,
                options.Sigv4 ?? EnvironmentVariables.Get("AWS_STEP_FUNCTIONS_SIGV4"));
    }
}
