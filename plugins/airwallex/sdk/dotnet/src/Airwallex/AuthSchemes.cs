using Airwallex.Core;
using Airwallex.Core.Authentication;
using Airwallex.Core.Authentication.ApiKey;
using Airwallex.Core.Authentication.Bearer;

namespace Airwallex;

internal sealed class AuthSchemes
{
    public IAuthScheme BearerAuth { get; }
    public IAuthScheme ClientIdHeader { get; }
    public IAuthScheme ApiKeyHeader { get; }

    public AuthSchemes(AirwallexClientOptions options)
    {
        BearerAuth =
            BearerAuthScheme.Create(
                "BearerAuth",
                options.BearerAuthProvider,
                options.BearerAuth ?? EnvironmentVariables.Get("AIRWALLEX_BEARER_AUTH"));
        ClientIdHeader =
            ApiKeyHeaderScheme.Create(
                "ClientIdHeader",
                "x-client-id",
                options.ClientIdHeaderProvider,
                options.ClientIdHeader ?? EnvironmentVariables.Get("AIRWALLEX_CLIENT_ID_HEADER"));
        ApiKeyHeader =
            ApiKeyHeaderScheme.Create(
                "ApiKeyHeader",
                "x-api-key",
                options.ApiKeyHeaderProvider,
                options.ApiKeyHeader ?? EnvironmentVariables.Get("AIRWALLEX_API_KEY_HEADER"));
    }
}
