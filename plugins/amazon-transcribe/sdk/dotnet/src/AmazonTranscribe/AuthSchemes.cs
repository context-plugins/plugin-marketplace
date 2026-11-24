using AmazonTranscribe.Core;
using AmazonTranscribe.Core.Authentication;
using AmazonTranscribe.Core.Authentication.ApiKey;

namespace AmazonTranscribe;

internal sealed class AuthSchemes
{
    public IAuthScheme Sigv4 { get; }

    public AuthSchemes(AmazonTranscribeClientOptions options)
    {
        Sigv4 =
            ApiKeyHeaderScheme.Create(
                "Sigv4",
                "Authorization",
                options.Sigv4Provider,
                options.Sigv4 ?? EnvironmentVariables.Get("AMAZON_TRANSCRIBE_SIGV4"));
    }
}
