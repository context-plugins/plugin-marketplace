using System;
using System.Collections.Generic;
using Rendex.Core.Authentication;
using Rendex.Core.Configuration;
using Rendex.Core.Hooks;
using Rendex.Servers;

namespace Rendex;

public class RendexClientOptions
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
    /// API key as Bearer token: <c>Authorization: Bearer rdx_...</c>
    /// </summary>
    public string? BearerAuth { get; set; }
    public CredentialProvider<string>? BearerAuthProvider { get; set; }
    /// <summary>
    /// API key in custom header: <c>x-api-key: rdx_...</c>
    /// </summary>
    public string? ApiKeyHeader { get; set; }
    public CredentialProvider<string>? ApiKeyHeaderProvider { get; set; }
    /// <summary>
    /// API key as query parameter (GET endpoint only): <c>?key=rdx_...</c>
    /// </summary>
    public string? ApiKeyQuery { get; set; }
    public CredentialProvider<string>? ApiKeyQueryProvider { get; set; }
}
