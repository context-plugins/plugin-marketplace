using Paid.Core;
using Paid.Core.Authentication;
using Paid.Core.Authentication.Bearer;

namespace Paid;

internal sealed class AuthSchemes
{
    public IAuthScheme BearerAuth { get; }

    public AuthSchemes(PaidClientOptions options)
    {
        BearerAuth =
            BearerAuthScheme.Create(
                "BearerAuth",
                options.BearerAuthProvider,
                options.BearerAuth ?? EnvironmentVariables.Get("PAID_BEARER_AUTH"));
    }
}
