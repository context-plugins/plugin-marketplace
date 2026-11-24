using System;
using System.Collections.Generic;
using Cubic.Core.Authentication;
using Cubic.Core.Configuration;
using Cubic.Core.Hooks;
using Cubic.Servers;

namespace Cubic;

public class CubicClientOptions
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
    /// A personal API key (cbk_) or an organization API key (cok_) with any access, from Settings &gt; API, CLI &amp; MCP. Requires Pro or Max. Analytics API keys that start with cak_ keep working, but cubic no longer creates them., A personal API key (cbk_) or an organization API key (cok_) from Settings &gt; API, CLI &amp; MCP. An organization key with Read access can only call the GET operations.
    /// </summary>
    public string? AnalyticsApiKey { get; set; }
    public CredentialProvider<string>? AnalyticsApiKeyProvider { get; set; }
}
