using System;
using System.Collections.Generic;
using Ortto.Core.Authentication;
using Ortto.Core.Configuration;
using Ortto.Core.Hooks;
using Ortto.Servers;

namespace Ortto;

public class OrttoClientOptions
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
    /// Custom private API key configured in Ortto under Settings, supplied on every request in the X-Api-Key header.
    /// </summary>
    public string? ApiKeyAuth { get; set; }
    public CredentialProvider<string>? ApiKeyAuthProvider { get; set; }
}
