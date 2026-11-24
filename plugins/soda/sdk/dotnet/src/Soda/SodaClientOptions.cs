using System;
using System.Collections.Generic;
using Soda.Core.Authentication;
using Soda.Core.Authentication.Basic;
using Soda.Core.Configuration;
using Soda.Core.Hooks;
using Soda.Servers;

namespace Soda;

public class SodaClientOptions
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
    public BasicAuthCredentials? BasicAuthApiKey { get; set; }
    public CredentialProvider<BasicAuthCredentials>? BasicAuthApiKeyProvider { get; set; }
    public string? CookieToken { get; set; }
    public CredentialProvider<string>? CookieTokenProvider { get; set; }
}
