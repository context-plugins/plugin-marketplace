using LastDatabase.Core;
using LastDatabase.Core.Authentication;
using LastDatabase.Core.Authentication.Bearer;

namespace LastDatabase;

internal sealed class AuthSchemes
{
    public IAuthScheme BearerAuth { get; }

    public AuthSchemes(LastDatabaseClientOptions options)
    {
        BearerAuth =
            BearerAuthScheme.Create(
                "BearerAuth",
                options.BearerAuthProvider,
                options.BearerAuth ?? EnvironmentVariables.Get("LAST_DATABASE_BEARER_AUTH"));
    }
}
