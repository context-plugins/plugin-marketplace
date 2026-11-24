using Cosmic.Core;
using Cosmic.Core.Authentication;
using Cosmic.Core.Authentication.ApiKey;
using Cosmic.Core.Authentication.Bearer;

namespace Cosmic;

internal sealed class AuthSchemes
{
    public IAuthScheme ReadKey { get; }
    public IAuthScheme WriteKey { get; }

    public AuthSchemes(CosmicClientOptions options)
    {
        ReadKey =
            ApiKeyQueryScheme.Create(
                "ReadKey",
                "read_key",
                options.ReadKeyProvider,
                options.ReadKey ?? EnvironmentVariables.Get("COSMIC_READ_KEY"));
        WriteKey =
            BearerAuthScheme.Create(
                "WriteKey",
                options.WriteKeyProvider,
                options.WriteKey ?? EnvironmentVariables.Get("COSMIC_WRITE_KEY"));
    }
}
