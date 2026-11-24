using Bitbucket.Core;
using Bitbucket.Core.Authentication;
using Bitbucket.Core.Authentication.ApiKey;
using Bitbucket.Core.Authentication.Basic;
using Bitbucket.Core.Authentication.OAuth2;
using Bitbucket.Core.Authentication.OAuth2.AuthorizationCode;

namespace Bitbucket;

internal sealed class AuthSchemes
{
    public IAuthScheme Basic { get; }
    public IAuthScheme Oauth2 { get; }
    public IAuthScheme ApiKey { get; }

    public AuthSchemes(BitbucketClientOptions options, Server server, RawClient rawClient, UriFactory urlFactory)
    {
        Basic =
            BasicAuthScheme.Create(
                "Basic",
                options.BasicProvider,
                options.Basic.WithEnvironmentDefaults("BITBUCKET_BASIC_USERNAME", "BITBUCKET_BASIC_PASSWORD"));
        Oauth2 =
            OAuth2RefreshableScheme<OAuth2AuthorizationCodeCredentials>.Create(
                "Oauth2",
                options.Oauth2,
                OAuth2AuthorizationCodeStrategy.ForBasicAuthRequest(
                    server.AuthServer("/authorize"),
                    server.AuthServer("/access_token"),
                    rawClient,
                    urlFactory),
                options.TimeProvider,
                scope: "repository repository:write repository:admin repository:delete project project:admin email account account:write team team:write pipeline pipeline:write pipeline:variable runner runner:write test test:write pullrequest pullrequest:write webhook issue issue:write snippet snippet:write wiki");
        ApiKey =
            ApiKeyHeaderScheme.Create(
                "ApiKey",
                "Authorization",
                options.ApiKeyProvider,
                options.ApiKey ?? EnvironmentVariables.Get("BITBUCKET_API_KEY"));
    }
}
