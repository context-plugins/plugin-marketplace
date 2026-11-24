using Semrush.Core;
using Semrush.Core.Authentication;
using Semrush.Core.Authentication.Bearer;

namespace Semrush;

internal sealed class AuthSchemes
{
    public IAuthScheme JwtIssuerToken { get; }

    public AuthSchemes(SemrushClientOptions options)
    {
        JwtIssuerToken =
            BearerAuthScheme.Create(
                "JwtIssuerToken",
                options.JwtIssuerTokenProvider,
                options.JwtIssuerToken ?? EnvironmentVariables.Get("SEMRUSH_JWT_ISSUER_TOKEN"));
    }
}
