using CallNode.Core;
using CallNode.Core.Authentication;
using CallNode.Core.Authentication.ApiKey;

namespace CallNode;

internal sealed class AuthSchemes
{
    public IAuthScheme ApiKeyAuth { get; }
    public IAuthScheme TimestampAuth { get; }
    public IAuthScheme SignatureAuth { get; }

    public AuthSchemes(CallNodeClientOptions options)
    {
        ApiKeyAuth =
            ApiKeyHeaderScheme.Create(
                "ApiKeyAuth",
                "X-Api-Key",
                options.ApiKeyAuthProvider,
                options.ApiKeyAuth ?? EnvironmentVariables.Get("CALL_NODE_API_KEY_AUTH"));
        TimestampAuth =
            ApiKeyHeaderScheme.Create(
                "TimestampAuth",
                "X-Timestamp",
                options.TimestampAuthProvider,
                options.TimestampAuth ?? EnvironmentVariables.Get("CALL_NODE_TIMESTAMP_AUTH"));
        SignatureAuth =
            ApiKeyHeaderScheme.Create(
                "SignatureAuth",
                "X-Signature",
                options.SignatureAuthProvider,
                options.SignatureAuth ?? EnvironmentVariables.Get("CALL_NODE_SIGNATURE_AUTH"));
    }
}
