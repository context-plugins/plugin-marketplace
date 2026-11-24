using OddsRelay.Core;
using OddsRelay.Core.Authentication;
using OddsRelay.Core.Authentication.ApiKey;
using OddsRelay.Core.Authentication.Bearer;

namespace OddsRelay;

internal sealed class AuthSchemes
{
    public IAuthScheme BearerAuth { get; }
    public IAuthScheme ApiKeyHeader { get; }

    public AuthSchemes(OddsRelayClientOptions options)
    {
        BearerAuth =
            BearerAuthScheme.Create(
                "BearerAuth",
                options.BearerAuthProvider,
                options.BearerAuth ?? EnvironmentVariables.Get("ODDS_RELAY_BEARER_AUTH"));
        ApiKeyHeader =
            ApiKeyHeaderScheme.Create(
                "ApiKeyHeader",
                "x-api-key",
                options.ApiKeyHeaderProvider,
                options.ApiKeyHeader ?? EnvironmentVariables.Get("ODDS_RELAY_API_KEY_HEADER"));
    }
}
