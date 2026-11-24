using System;
using System.Collections.Generic;
using LastDatabase.Core.Authentication;
using LastDatabase.Core.Configuration;
using LastDatabase.Core.Hooks;
using LastDatabase.Servers;

namespace LastDatabase;

public class LastDatabaseClientOptions
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
    /// Active LastDatabase API key.
    /// <para>
    /// Send the key in the Authorization header:
    /// </para>
    /// <para>
    /// Authorization: Bearer YOUR_API_KEY
    /// </para>
    /// </summary>
    public string? BearerAuth { get; set; }
    public CredentialProvider<string>? BearerAuthProvider { get; set; }
}
