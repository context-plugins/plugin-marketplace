using AlphaAi.Core;
using AlphaAi.Core.Authentication;
using AlphaAi.Core.Authentication.Bearer;

namespace AlphaAi;

internal sealed class AuthSchemes
{
    public IAuthScheme ApiKey { get; }

    public AuthSchemes(AlphaAiClientOptions options)
    {
        ApiKey =
            BearerAuthScheme.Create(
                "ApiKey",
                options.ApiKeyProvider,
                options.ApiKey ?? EnvironmentVariables.Get("ALPHA_AI_API_KEY"));
    }
}
