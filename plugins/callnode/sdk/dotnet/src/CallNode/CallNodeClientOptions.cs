using System;
using System.Collections.Generic;
using CallNode.Core.Authentication;
using CallNode.Core.Configuration;
using CallNode.Core.Hooks;
using CallNode.Servers;

namespace CallNode;

public class CallNodeClientOptions
{
    public ServerEnvironment Environment { get; set; } = ServerEnvironment.Default();
    public RetryOptions Retry { get; set; } = RetryOptions.Default();
    public LoggingOptions Logging { get; set; } = new();
    public TimeProvider TimeProvider { get; set; } = TimeProvider.System;
    public ServerOptions Server { get; set; } = new();
    /// <summary>
    /// Maximum time to wait for the next frame of a streaming (SSE) response before the stream is
    /// torn down with a timeout. Bounds only the wait for the server between frames, never the
    /// caller's own processing time. Set to null to wait indefinitely.
    /// </summary>
    public TimeSpan? StreamReadTimeout { get; set; } = TimeSpan.FromSeconds(60);
    public IReadOnlyList<SdkHook> Hooks { get; set; } = [];
    /// <summary>
    /// Your API key, e.g. <c>cn_live_...</c>.
    /// </summary>
    public string? ApiKeyAuth { get; set; }
    public CredentialProvider<string>? ApiKeyAuthProvider { get; set; }
    /// <summary>
    /// Unix seconds as a string, used as the signature prefix.
    /// </summary>
    public string? TimestampAuth { get; set; }
    public CredentialProvider<string>? TimestampAuthProvider { get; set; }
    /// <summary>
    /// <c>hex(HMAC_SHA256(apiSecret, timestamp + "\n" + rawBody))</c>.
    /// </summary>
    public string? SignatureAuth { get; set; }
    public CredentialProvider<string>? SignatureAuthProvider { get; set; }
}
