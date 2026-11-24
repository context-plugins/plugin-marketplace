using System;
using System.Collections.Generic;
using Instacart.Core.Authentication;
using Instacart.Core.Configuration;
using Instacart.Core.Hooks;
using Instacart.Servers;

namespace Instacart;

public class InstacartClientOptions
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
    /// OAuth 2.0 Bearer token obtained from the token endpoint. Valid for 24 hours., OAuth 2.0 Bearer token obtained from the access token endpoint. A user access token is required for post-checkout operations., OAuth 2.0 Bearer token obtained from the token endpoint. Valid for 24 hours., OAuth 2.0 Bearer token obtained using client credentials with the connect:data_ingestion scope., OAuth 2.0 Bearer token obtained from the token endpoint. Valid for 24 hours., OAuth 2.0 Bearer token obtained from the access token endpoint. A user access token is required for post-checkout operations., OAuth 2.0 Bearer token obtained from the token endpoint. Valid for 24 hours., OAuth 2.0 Bearer token obtained using client credentials with the connect:data_ingestion scope., OAuth 2.0 Bearer token obtained from the access token endpoint. A user access token is required for post-checkout operations.
    /// </summary>
    public string? BearerAuth { get; set; }
    public CredentialProvider<string>? BearerAuthProvider { get; set; }
    /// <summary>
    /// API key authentication. Include your API key in the Authorization header.
    /// </summary>
    public string? ApiKeyAuth { get; set; }
    public CredentialProvider<string>? ApiKeyAuthProvider { get; set; }
}
