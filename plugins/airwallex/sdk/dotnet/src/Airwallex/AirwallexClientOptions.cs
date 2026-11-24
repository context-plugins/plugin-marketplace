using System;
using System.Collections.Generic;
using Airwallex.Core.Authentication;
using Airwallex.Core.Configuration;
using Airwallex.Core.Hooks;
using Airwallex.Servers;

namespace Airwallex;

public class AirwallexClientOptions
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
    /// Bearer access token obtained via POST /api/v1/authentication/login using
    /// <c>x-client-id</c> and <c>x-api-key</c> request headers.
    /// </summary>
    public string? BearerAuth { get; set; }
    public CredentialProvider<string>? BearerAuthProvider { get; set; }
    public string? ClientIdHeader { get; set; }
    public CredentialProvider<string>? ClientIdHeaderProvider { get; set; }
    public string? ApiKeyHeader { get; set; }
    public CredentialProvider<string>? ApiKeyHeaderProvider { get; set; }
}
