using FlowAccount.Core;
using FlowAccount.Core.Authentication;
using FlowAccount.Core.Authentication.Bearer;

namespace FlowAccount;

internal sealed class AuthSchemes
{
    public IAuthScheme Bearer { get; }

    public AuthSchemes(FlowAccountClientOptions options)
    {
        Bearer =
            BearerAuthScheme.Create(
                "Bearer",
                options.BearerProvider,
                options.Bearer ?? EnvironmentVariables.Get("FLOW_ACCOUNT_BEARER"));
    }
}
