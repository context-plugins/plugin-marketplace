using System;
using System.Collections.Generic;
using Tabby.Core.Authentication;
using Tabby.Core.Configuration;
using Tabby.Core.Hooks;
using Tabby.Servers;

namespace Tabby;

public class TabbyClientOptions
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
    /// Bearer authentication header of the form <c>Bearer &lt;secret_key&gt;</c>, where <c>&lt;secret_key&gt;</c> is your <c>secret_key</c>.
    /// </summary>
    public string? BearerAuth { get; set; }
    public CredentialProvider<string>? BearerAuthProvider { get; set; }
}
