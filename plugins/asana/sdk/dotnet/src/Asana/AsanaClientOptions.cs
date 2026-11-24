using System;
using System.Collections.Generic;
using Asana.Core.Authentication;
using Asana.Core.Authentication.OAuth2.AuthorizationCode;
using Asana.Core.Configuration;
using Asana.Core.Hooks;
using Asana.Servers;

namespace Asana;

public class AsanaClientOptions
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
    /// A personal access token allows access to the api for the user who created it. This should be kept a secret and be treated like a password.
    /// </summary>
    public string? PersonalAccessToken { get; set; }
    public CredentialProvider<string>? PersonalAccessTokenProvider { get; set; }
    /// <summary>
    /// We require that applications designed to access the Asana API on behalf of multiple users implement OAuth 2.0.
    /// Asana supports the Authorization Code Grant flow.
    /// </summary>
    public OAuth2AuthorizationCodeCredentials? Oauth2 { get; set; }
}
