using CodeQr.Core;
using CodeQr.Core.Authentication;
using CodeQr.Core.Authentication.Bearer;

namespace CodeQr;

internal sealed class AuthSchemes
{
    public IAuthScheme Token { get; }

    public AuthSchemes(CodeQrClientOptions options)
    {
        Token =
            BearerAuthScheme.Create(
                "Token",
                options.TokenProvider,
                options.Token ?? EnvironmentVariables.Get("CODE_QR_TOKEN"));
    }
}
