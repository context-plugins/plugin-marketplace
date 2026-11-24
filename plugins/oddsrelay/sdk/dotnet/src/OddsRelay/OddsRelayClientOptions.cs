using System;
using System.Collections.Generic;
using OddsRelay.Core.Authentication;
using OddsRelay.Core.Configuration;
using OddsRelay.Core.Hooks;
using OddsRelay.Servers;

namespace OddsRelay;

public class OddsRelayClientOptions
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
    /// <c>Authorization: Bearer or_live_…</c>
    /// </summary>
    public string? BearerAuth { get; set; }
    public CredentialProvider<string>? BearerAuthProvider { get; set; }
    /// <summary>
    /// The same key in <c>x-api-key</c>.
    /// </summary>
    public string? ApiKeyHeader { get; set; }
    public CredentialProvider<string>? ApiKeyHeaderProvider { get; set; }
}
