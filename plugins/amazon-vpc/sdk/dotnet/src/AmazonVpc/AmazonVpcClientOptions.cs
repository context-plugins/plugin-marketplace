using System;
using System.Collections.Generic;
using AmazonVpc.Core.Authentication;
using AmazonVpc.Core.Configuration;
using AmazonVpc.Core.Hooks;
using AmazonVpc.Servers;

namespace AmazonVpc;

public class AmazonVpcClientOptions
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
    /// AWS Signature Version 4 authentication
    /// </summary>
    public string? Sigv4Auth { get; set; }
    public CredentialProvider<string>? Sigv4AuthProvider { get; set; }
}
