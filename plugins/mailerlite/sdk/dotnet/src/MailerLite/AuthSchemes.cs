using MailerLite.Core;
using MailerLite.Core.Authentication;
using MailerLite.Core.Authentication.ApiKey;

namespace MailerLite;

internal sealed class AuthSchemes
{
    public IAuthScheme ApiKey { get; }

    public AuthSchemes(MailerLiteClientOptions options)
    {
        ApiKey =
            ApiKeyHeaderScheme.Create(
                "ApiKey",
                "x-mailerlite-apikey",
                options.ApiKeyProvider,
                options.ApiKey ?? EnvironmentVariables.Get("MAILER_LITE_API_KEY"));
    }
}
