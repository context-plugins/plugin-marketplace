using System;
using System.Collections.Generic;
using Statable.Core.Authentication;
using Statable.Core.Configuration;
using Statable.Core.Hooks;
using Statable.Servers;

namespace Statable;

public class StatableClientOptions
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
    /// A key minted in Settings → API. All tokens start with <c>stbl_</c>. Missing, malformed, invalid, expired, or revoked → 401. Every operation in this spec requires the key's <c>read</c> scope; without it → 403 <c>insufficient_scope</c>.
    /// </summary>
    public string? BearerAuth { get; set; }
    public CredentialProvider<string>? BearerAuthProvider { get; set; }
}
