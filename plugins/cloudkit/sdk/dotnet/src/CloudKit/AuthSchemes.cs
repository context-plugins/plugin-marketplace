using CloudKit.Core;
using CloudKit.Core.Authentication;
using CloudKit.Core.Authentication.ApiKey;

namespace CloudKit;

internal sealed class AuthSchemes
{
    public IAuthScheme CloudKitApiToken { get; }
    public IAuthScheme ServerToServer { get; }

    public AuthSchemes(CloudKitClientOptions options)
    {
        CloudKitApiToken =
            ApiKeyQueryScheme.Create(
                "CloudKitApiToken",
                "ckAPIToken",
                options.CloudKitApiTokenProvider,
                options.CloudKitApiToken ?? EnvironmentVariables.Get("CLOUD_KIT_CLOUD_KIT_API_TOKEN"));
        ServerToServer =
            ApiKeyHeaderScheme.Create(
                "ServerToServer",
                "X-Apple-CloudKit-Request-SignatureV1",
                options.ServerToServerProvider,
                options.ServerToServer ?? EnvironmentVariables.Get("CLOUD_KIT_SERVER_TO_SERVER"));
    }
}
