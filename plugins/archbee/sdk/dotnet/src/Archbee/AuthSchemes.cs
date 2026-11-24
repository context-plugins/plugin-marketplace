using Archbee.Core;
using Archbee.Core.Authentication;
using Archbee.Core.Authentication.Bearer;

namespace Archbee;

internal sealed class AuthSchemes
{
    public IAuthScheme BearerAuth { get; }

    public AuthSchemes(ArchbeeClientOptions options)
    {
        BearerAuth =
            BearerAuthScheme.Create(
                "BearerAuth",
                options.BearerAuthProvider,
                options.BearerAuth ?? EnvironmentVariables.Get("ARCHBEE_BEARER_AUTH"));
    }
}
