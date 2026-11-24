using Mailboxlayer.Core;
using Mailboxlayer.Core.Authentication;
using Mailboxlayer.Core.Authentication.ApiKey;

namespace Mailboxlayer;

internal sealed class AuthSchemes
{
    public IAuthScheme AccessKeyQuery { get; }

    public AuthSchemes(MailboxlayerClientOptions options)
    {
        AccessKeyQuery =
            ApiKeyQueryScheme.Create(
                "AccessKeyQuery",
                "access_key",
                options.AccessKeyQueryProvider,
                options.AccessKeyQuery ?? EnvironmentVariables.Get("MAILBOXLAYER_ACCESS_KEY_QUERY"));
    }
}
