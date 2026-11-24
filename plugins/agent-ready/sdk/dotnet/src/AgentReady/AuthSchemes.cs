using AgentReady.Core;
using AgentReady.Core.Authentication;
using AgentReady.Core.Authentication.Bearer;

namespace AgentReady;

internal sealed class AuthSchemes
{
    public IAuthScheme ApiKey { get; }

    public AuthSchemes(AgentReadyClientOptions options)
    {
        ApiKey =
            BearerAuthScheme.Create(
                "ApiKey",
                options.ApiKeyProvider,
                options.ApiKey ?? EnvironmentVariables.Get("AGENT_READY_API_KEY"));
    }
}
