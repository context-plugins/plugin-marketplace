using AmazonRekognition.Core;
using AmazonRekognition.Core.Authentication;
using AmazonRekognition.Core.Authentication.ApiKey;

namespace AmazonRekognition;

internal sealed class AuthSchemes
{
    public IAuthScheme Sigv4 { get; }

    public AuthSchemes(AmazonRekognitionClientOptions options)
    {
        Sigv4 =
            ApiKeyHeaderScheme.Create(
                "Sigv4",
                "Authorization",
                options.Sigv4Provider,
                options.Sigv4 ?? EnvironmentVariables.Get("AMAZON_REKOGNITION_SIGV4"));
    }
}
