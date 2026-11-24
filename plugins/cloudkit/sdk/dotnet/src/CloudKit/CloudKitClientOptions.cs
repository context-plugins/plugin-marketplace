using System;
using System.Collections.Generic;
using CloudKit.Core.Authentication;
using CloudKit.Core.Configuration;
using CloudKit.Core.Hooks;
using CloudKit.Servers;

namespace CloudKit;

public class CloudKitClientOptions
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
    /// CloudKit API token issued from the CloudKit dashboard, appended to
    /// the request URL as <c>ckAPIToken</c>. Required for end-user authenticated
    /// access via web auth tokens.
    /// </summary>
    public string? CloudKitApiToken { get; set; }
    public CredentialProvider<string>? CloudKitApiTokenProvider { get; set; }
    /// <summary>
    /// Server-to-server authentication uses ECDSA-signed requests with
    /// <c>X-Apple-CloudKit-Request-KeyID</c>, <c>X-Apple-CloudKit-Request-ISO8601Date</c>,
    /// and <c>X-Apple-CloudKit-Request-SignatureV1</c> headers.
    /// </summary>
    public string? ServerToServer { get; set; }
    public CredentialProvider<string>? ServerToServerProvider { get; set; }
}
