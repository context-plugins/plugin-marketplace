using Givebutter.Core;
using Givebutter.Core.Authentication;
using Givebutter.Core.Authentication.Bearer;

namespace Givebutter;

internal sealed class AuthSchemes
{
    public IAuthScheme Http { get; }

    public AuthSchemes(GivebutterClientOptions options)
    {
        Http =
            BearerAuthScheme.Create(
                "Http",
                options.HttpProvider,
                options.Http ?? EnvironmentVariables.Get("GIVEBUTTER_HTTP"));
    }
}
