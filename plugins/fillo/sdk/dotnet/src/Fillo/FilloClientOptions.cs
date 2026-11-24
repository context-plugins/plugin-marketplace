using System;
using System.Collections.Generic;
using Fillo.Core.Authentication;
using Fillo.Core.Configuration;
using Fillo.Core.Hooks;
using Fillo.Servers;

namespace Fillo;

public class FilloClientOptions
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
    /// A project secret key (<c>fsk_…</c>). Scopes: forms:read, responses:read, respondents:read, responses:export, forms:write, forms:publish, storage:manage, webhooks:manage, settings:manage, integrations:manage, responses:manage, members:manage, workspace:manage, forms:delete, responses:delete, respondents:delete, workspace:delete. A request for a scope the key lacks returns 403 with a stable message naming the scope (e.g. <c>This key lacks the responses:export scope.</c>).
    /// </summary>
    public string? BearerAuth { get; set; }
    public CredentialProvider<string>? BearerAuthProvider { get; set; }
}
