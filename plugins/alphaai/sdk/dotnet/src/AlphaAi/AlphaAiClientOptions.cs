using System;
using System.Collections.Generic;
using AlphaAi.Core.Authentication;
using AlphaAi.Core.Configuration;
using AlphaAi.Core.Hooks;
using AlphaAi.Servers;

namespace AlphaAi;

public class AlphaAiClientOptions
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
    /// Token of the form <c>ak_live_&lt;random&gt;</c>. Issued from
    /// <c>/account/api-keys</c> on the website. Send as <c>Authorization: Bearer …</c>.
    /// </summary>
    public string? ApiKey { get; set; }
    public CredentialProvider<string>? ApiKeyProvider { get; set; }
}
