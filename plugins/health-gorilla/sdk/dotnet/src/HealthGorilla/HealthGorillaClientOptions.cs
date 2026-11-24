using System;
using System.Collections.Generic;
using HealthGorilla.Core.Authentication;
using HealthGorilla.Core.Configuration;
using HealthGorilla.Core.Hooks;
using HealthGorilla.Servers;

namespace HealthGorilla;

public class HealthGorillaClientOptions
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
    /// OAuth 2.0 bearer access token. Obtain a token using the client credentials issued during onboarding via the Health Gorilla OAuth 2.0 token endpoint, then pass it as <c>Authorization: Bearer {token}</c>.
    /// </summary>
    public string? BearerAuth { get; set; }
    public CredentialProvider<string>? BearerAuthProvider { get; set; }
}
