using Jid.Core;
using Jid.Core.Authentication;
using Jid.Core.Authentication.Bearer;

namespace Jid;

internal sealed class AuthSchemes
{
    public IAuthScheme Bearer { get; }

    public AuthSchemes(JidClientOptions options)
    {
        Bearer =
            BearerAuthScheme.Create(
                "Bearer",
                options.BearerProvider,
                options.Bearer ?? EnvironmentVariables.Get("JID_BEARER"));
    }
}
