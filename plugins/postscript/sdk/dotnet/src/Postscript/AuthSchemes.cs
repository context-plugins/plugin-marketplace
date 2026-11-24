using Postscript.Core;
using Postscript.Core.Authentication;
using Postscript.Core.Authentication.ApiKey;

namespace Postscript;

internal sealed class AuthSchemes
{
    public IAuthScheme Sec0 { get; }

    public AuthSchemes(PostscriptClientOptions options)
    {
        Sec0 =
            ApiKeyHeaderScheme.Create(
                "Sec0",
                "Authorization",
                options.Sec0Provider,
                options.Sec0 ?? EnvironmentVariables.Get("POSTSCRIPT_SEC0"));
    }
}
