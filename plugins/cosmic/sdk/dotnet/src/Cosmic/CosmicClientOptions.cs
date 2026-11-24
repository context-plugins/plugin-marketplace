using System;
using System.Collections.Generic;
using Cosmic.Core.Authentication;
using Cosmic.Core.Configuration;
using Cosmic.Core.Hooks;
using Cosmic.Servers;

namespace Cosmic;

public class CosmicClientOptions
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
    /// The Bucket read key, passed as a query parameter. Grants read access to a single Bucket and nothing else. Find it under Bucket &gt; Settings &gt; API Access in the dashboard. Buckets with no read key configured accept reads without one.
    /// </summary>
    public string? ReadKey { get; set; }
    public CredentialProvider<string>? ReadKeyProvider { get; set; }
    /// <summary>
    /// The Bucket write key, passed as <c>Authorization: Bearer &lt;write_key&gt;</c>. Grants read and write access to a single Bucket and nothing else. Find it under Bucket &gt; Settings &gt; API Access in the dashboard. The bare key without the <c>Bearer </c> prefix is also accepted, but <c>Bearer</c> is the documented form. Buckets with no write key configured accept writes without one.
    /// </summary>
    public string? WriteKey { get; set; }
    public CredentialProvider<string>? WriteKeyProvider { get; set; }
}
