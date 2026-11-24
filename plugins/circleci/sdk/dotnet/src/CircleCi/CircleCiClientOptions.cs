using System;
using System.Collections.Generic;
using CircleCi.Core.Authentication;
using CircleCi.Core.Authentication.Basic;
using CircleCi.Core.Configuration;
using CircleCi.Core.Hooks;
using CircleCi.Servers;

namespace CircleCi;

public class CircleCiClientOptions
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
    /// Personal API token for authenticating with the CircleCI API. Can also be passed as a query parameter., Personal API token for authenticating with the CircleCI API. Generate tokens in your CircleCI account settings., Personal API token for authenticating with the CircleCI API. Generate tokens in your CircleCI account settings., Personal API token for authenticating with the CircleCI API. Generate tokens in your CircleCI account settings., Personal API token for authenticating with the CircleCI API. Generate tokens in your CircleCI account settings., Personal API token for authenticating with the CircleCI API. Can also be passed as a query parameter., Personal API token for authenticating with the CircleCI API. Can also be passed as a query parameter., Personal API token for authenticating with the CircleCI API. Can also be passed as a query parameter., Personal API token for authenticating with the CircleCI API. Generate tokens in your CircleCI account settings., Personal API token for authenticating with the CircleCI API. Can also be passed as a query parameter., Personal API token for authenticating with the CircleCI API. Can also be passed as a query parameter., Personal API token for authenticating with the CircleCI API. Can also be passed as a query parameter., Personal API token for authenticating with the CircleCI API. Generate tokens in your CircleCI account settings., Personal API token for authenticating with the CircleCI API. Generate tokens in your CircleCI account settings., Personal API token for authenticating with the CircleCI API. Can also be passed as a query parameter.
    /// </summary>
    public string? ApiToken { get; set; }
    public CredentialProvider<string>? ApiTokenProvider { get; set; }
    /// <summary>
    /// HTTP basic authentication using a personal API token as the username with an empty password.
    /// </summary>
    public BasicAuthCredentials? BasicAuth { get; set; }
    public CredentialProvider<BasicAuthCredentials>? BasicAuthProvider { get; set; }
}
