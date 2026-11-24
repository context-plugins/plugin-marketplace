using System;
using System.Collections.Generic;
using Cloro.Core.Authentication;
using Cloro.Core.Configuration;
using Cloro.Core.Hooks;
using Cloro.Servers;

namespace Cloro;

public class CloroClientOptions
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
    /// cloro API key as a bearer token. One key grants every endpoint in this spec; per-key scopes are not available, so a client cannot request a narrower permission. Keys are created and revoked in the <see href="https://dashboard.cloro.dev/api-keys">dashboard</see>.
    /// </summary>
    public string? BearerAuth { get; set; }
    public CredentialProvider<string>? BearerAuthProvider { get; set; }
}
