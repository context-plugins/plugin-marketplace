using AlphAi.Core;
using AlphAi.Core.Authentication;
using AlphAi.Core.Authentication.Bearer;

namespace AlphAi;

internal sealed class AuthSchemes
{
    public IAuthScheme ApiKey { get; }

    public AuthSchemes(AlphAiClientOptions options)
    {
        ApiKey =
            BearerAuthScheme.Create(
                "ApiKey",
                options.ApiKeyProvider,
                options.ApiKey ?? EnvironmentVariables.Get("ALPH_AI_API_KEY"));
    }
}
