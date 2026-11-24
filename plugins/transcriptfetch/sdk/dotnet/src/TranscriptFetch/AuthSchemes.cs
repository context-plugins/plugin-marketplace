using TranscriptFetch.Core;
using TranscriptFetch.Core.Authentication;
using TranscriptFetch.Core.Authentication.Bearer;

namespace TranscriptFetch;

internal sealed class AuthSchemes
{
    public IAuthScheme BearerAuth { get; }

    public AuthSchemes(TranscriptFetchClientOptions options)
    {
        BearerAuth =
            BearerAuthScheme.Create(
                "BearerAuth",
                options.BearerAuthProvider,
                options.BearerAuth ?? EnvironmentVariables.Get("TRANSCRIPT_FETCH_BEARER_AUTH"));
    }
}
