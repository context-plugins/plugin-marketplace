using Audioscrape.Core;
using Audioscrape.Core.Authentication;
using Audioscrape.Core.Authentication.Bearer;

namespace Audioscrape;

internal sealed class AuthSchemes
{
    public IAuthScheme BearerAuth { get; }

    public AuthSchemes(AudioscrapeClientOptions options)
    {
        BearerAuth =
            BearerAuthScheme.Create(
                "BearerAuth",
                options.BearerAuthProvider,
                options.BearerAuth ?? EnvironmentVariables.Get("AUDIOSCRAPE_BEARER_AUTH"));
    }
}
