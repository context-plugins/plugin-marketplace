using Shortcut.Core;
using Shortcut.Core.Authentication;
using Shortcut.Core.Authentication.ApiKey;

namespace Shortcut;

internal sealed class AuthSchemes
{
    public IAuthScheme ApiToken { get; }

    public AuthSchemes(ShortcutClientOptions options)
    {
        ApiToken =
            ApiKeyHeaderScheme.Create(
                "ApiToken",
                "Shortcut-Token",
                options.ApiTokenProvider,
                options.ApiToken ?? EnvironmentVariables.Get("SHORTCUT_API_TOKEN"));
    }
}
