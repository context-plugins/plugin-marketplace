using Lili.Core;
using Lili.Core.Authentication;
using Lili.Core.Authentication.ApiKey;

namespace Lili;

internal sealed class AuthSchemes
{
    public IAuthScheme AccessKey { get; }

    public AuthSchemes(LiliClientOptions options)
    {
        AccessKey =
            ApiKeyHeaderScheme.Create(
                "AccessKey",
                "Authorization",
                options.AccessKeyProvider,
                options.AccessKey ?? EnvironmentVariables.Get("LILI_ACCESS_KEY"));
    }
}
