using System;
using System.Collections.Generic;
using Leadspace.Core.Authentication;
using Leadspace.Core.Configuration;
using Leadspace.Core.Hooks;
using Leadspace.Servers;

namespace Leadspace;

public class LeadspaceClientOptions
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
    /// Authorization header in the form 'Bearer API_KEY'. The API key is either a perpetual token issued by Leadspace or an OAuth 2.0 token obtained from POST /oauth/authorize., Authorization header in the form 'Bearer API_KEY', Authorization header in the form 'Bearer API_KEY'. The API key is either a perpetual token issued by Leadspace or an OAuth 2.0 token obtained from POST /oauth/authorize., Authorization header in the form 'Bearer API_KEY', Authorization header in the form 'Bearer API_KEY'
    /// </summary>
    public string? BearerAuth { get; set; }
    public CredentialProvider<string>? BearerAuthProvider { get; set; }
}
