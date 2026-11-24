using System;
using System.Collections.Generic;
using Unbounce.Core.Authentication;
using Unbounce.Core.Authentication.Basic;
using Unbounce.Core.Authentication.OAuth2.AuthorizationCode;
using Unbounce.Core.Configuration;
using Unbounce.Core.Hooks;
using Unbounce.Servers;

namespace Unbounce;

public class UnbounceClientOptions
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
    /// HTTP Basic auth using the Unbounce API key as the username.
    /// </summary>
    public BasicAuthCredentials? ApiKeyAuth { get; set; }
    public CredentialProvider<BasicAuthCredentials>? ApiKeyAuthProvider { get; set; }
    /// <summary>
    /// OAuth 2.0 Authorization Code (granted case-by-case by Unbounce).
    /// </summary>
    public OAuth2AuthorizationCodeCredentials? Oauth2 { get; set; }
}
