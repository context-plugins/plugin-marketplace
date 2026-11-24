using System;
using System.Collections.Generic;
using Archbee.Core.Authentication;
using Archbee.Core.Configuration;
using Archbee.Core.Hooks;
using Archbee.Servers;

namespace Archbee;

public class ArchbeeClientOptions
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
    /// Requires the Authorization header in the form Authorization: Bearer {base64(docSpaceId~apiKey)} — the base64 encoding of the docSpaceId, a tilde, and the apiKey. A team key beginning abteam_ may be used instead to reach every space in the organization.
    /// </summary>
    public string? BearerAuth { get; set; }
    public CredentialProvider<string>? BearerAuthProvider { get; set; }
}
