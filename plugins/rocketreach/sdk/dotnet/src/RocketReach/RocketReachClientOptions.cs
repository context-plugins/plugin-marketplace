using System;
using System.Collections.Generic;
using RocketReach.Core.Authentication;
using RocketReach.Core.Configuration;
using RocketReach.Core.Hooks;
using RocketReach.Servers;

namespace RocketReach;

public class RocketReachClientOptions
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
    /// RocketReach account API key. You can locate your API Key from the "My API Key" section of the <see href="https://rocketreach.co/account?section=nav_gen_api">API account page</see>. Requests to the API are authenticated using the Api-Key request header. Older clients may use an <c>api_key</c> query parameter, but this behavior is deprecated.
    /// </summary>
    public string? RocketReachApiKey { get; set; }
    public CredentialProvider<string>? RocketReachApiKeyProvider { get; set; }
}
