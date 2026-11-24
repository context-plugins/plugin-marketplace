using System;
using System.Collections.Generic;
using Jid.Core.Authentication;
using Jid.Core.Configuration;
using Jid.Core.Hooks;
using Jid.Servers;

namespace Jid;

public class JidClientOptions
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
    /// jid_live_... key from https://jid.com/pricing (free key: no card).
    /// </summary>
    public string? Bearer { get; set; }
    public CredentialProvider<string>? BearerProvider { get; set; }
}
