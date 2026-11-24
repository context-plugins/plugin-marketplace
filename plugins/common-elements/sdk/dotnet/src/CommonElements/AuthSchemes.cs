using CommonElements.Core;
using CommonElements.Core.Authentication;
using CommonElements.Core.Authentication.Bearer;

namespace CommonElements;

internal sealed class AuthSchemes
{
    public IAuthScheme BearerAuth { get; }

    public AuthSchemes(CommonElementsClientOptions options)
    {
        BearerAuth =
            BearerAuthScheme.Create(
                "BearerAuth",
                options.BearerAuthProvider,
                options.BearerAuth ?? EnvironmentVariables.Get("COMMON_ELEMENTS_BEARER_AUTH"));
    }
}
