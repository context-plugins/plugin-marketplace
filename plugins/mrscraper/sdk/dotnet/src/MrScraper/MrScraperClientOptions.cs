using System;
using System.Collections.Generic;
using MrScraper.Core.Authentication;
using MrScraper.Core.Configuration;
using MrScraper.Core.Hooks;
using MrScraper.Servers;

namespace MrScraper;

public class MrScraperClientOptions
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
    /// atk_example_not_a_real_token
    /// </summary>
    public string? ApiKey { get; set; }
    public CredentialProvider<string>? ApiKeyProvider { get; set; }
    /// <summary>
    /// "Bearer &lt;token&gt;" — a MrScraper API token, or an OAuth 2.1 access token issued by the platform for the MCP connector (scopes: scrape:read for GET /, scrape:write for POST /, account:read for GET /subscription-accounts).
    /// </summary>
    public string? BearerAuth { get; set; }
    public CredentialProvider<string>? BearerAuthProvider { get; set; }
}
