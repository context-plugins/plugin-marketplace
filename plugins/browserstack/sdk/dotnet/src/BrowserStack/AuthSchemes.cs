using BrowserStack.Core.Authentication;
using BrowserStack.Core.Authentication.Basic;

namespace BrowserStack;

internal sealed class AuthSchemes
{
    public IAuthScheme BasicAuth { get; }

    public AuthSchemes(BrowserStackClientOptions options)
    {
        BasicAuth =
            BasicAuthScheme.Create(
                "BasicAuth",
                options.BasicAuthProvider,
                options.BasicAuth.WithEnvironmentDefaults(
                    "BROWSER_STACK_BASIC_AUTH_USERNAME",
                    "BROWSER_STACK_BASIC_AUTH_PASSWORD"));
    }
}
