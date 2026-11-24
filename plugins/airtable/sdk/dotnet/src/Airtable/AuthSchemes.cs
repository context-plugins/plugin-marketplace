using Airtable.Core;
using Airtable.Core.Authentication;
using Airtable.Core.Authentication.Bearer;

namespace Airtable;

internal sealed class AuthSchemes
{
    public IAuthScheme BearerAuth { get; }

    public AuthSchemes(AirtableClientOptions options)
    {
        BearerAuth =
            BearerAuthScheme.Create(
                "BearerAuth",
                options.BearerAuthProvider,
                options.BearerAuth ?? EnvironmentVariables.Get("AIRTABLE_BEARER_AUTH"));
    }
}
