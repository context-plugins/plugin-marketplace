using System;
using System.Collections.Generic;
using Audioscrape.Core.Authentication;
using Audioscrape.Core.Configuration;
using Audioscrape.Core.Hooks;
using Audioscrape.Servers;

namespace Audioscrape;

public class AudioscrapeClientOptions
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
    /// Workspace-scoped API key. Pass as <c>Authorization: Bearer &lt;key&gt;</c>. The <c>?api_key=&lt;key&gt;</c> query parameter is deprecated: a key in a URL ends up in browser history, proxy logs and Referer headers.
    /// </summary>
    public string? BearerAuth { get; set; }
    public CredentialProvider<string>? BearerAuthProvider { get; set; }
}
