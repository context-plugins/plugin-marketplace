using System;
using System.Collections.Generic;
using RelmCrm.Core.Authentication;
using RelmCrm.Core.Authentication.OAuth2.AuthorizationCode;
using RelmCrm.Core.Configuration;
using RelmCrm.Core.Hooks;
using RelmCrm.Servers;

namespace RelmCrm;

public class RelmCrmClientOptions
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
    /// Workspace-scoped API key. relm_live_... (live) or relm_test_... (free, isolated test mode). Mint at https://app.relmcrm.com/.
    /// </summary>
    public string? BearerAuth { get; set; }
    public CredentialProvider<string>? BearerAuthProvider { get; set; }
    /// <summary>
    /// OAuth 2.1 with PKCE (S256) and dynamic client registration (RFC 7591). Live mode only; test mode is API-key only. Discovery: /.well-known/oauth-authorization-server.
    /// </summary>
    public OAuth2AuthorizationCodeCredentials? Oauth2 { get; set; }
}
