using AmazonLex.Core;
using AmazonLex.Core.Authentication;
using AmazonLex.Core.Authentication.ApiKey;

namespace AmazonLex;

internal sealed class AuthSchemes
{
    public IAuthScheme Sigv4 { get; }

    public AuthSchemes(AmazonLexClientOptions options)
    {
        Sigv4 =
            ApiKeyHeaderScheme.Create(
                "Sigv4",
                "Authorization",
                options.Sigv4Provider,
                options.Sigv4 ?? EnvironmentVariables.Get("AMAZON_LEX_SIGV4"));
    }
}
