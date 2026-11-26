using System;
using System.Collections.Generic;
using Dynamics365BusinessCentral.Core.Authentication;
using Dynamics365BusinessCentral.Core.Authentication.OAuth2.AuthorizationCode;
using Dynamics365BusinessCentral.Core.Authentication.OAuth2.ClientCredentials;
using Dynamics365BusinessCentral.Core.Configuration;
using Dynamics365BusinessCentral.Core.Hooks;
using Dynamics365BusinessCentral.Servers;

namespace Dynamics365BusinessCentral;

public class Dynamics365BusinessCentralClientOptions
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
    /// OAuth 2.0 authentication via Microsoft Entra ID
    /// </summary>
    public OAuth2AuthorizationCodeCredentials? Oauth2AuthorizationCode { get; set; }
    /// <summary>
    /// OAuth 2.0 authentication via Microsoft Entra ID
    /// </summary>
    public OAuth2ClientCredentials? Oauth2ClientCredentials { get; set; }
    /// <summary>
    /// Bearer token obtained from Microsoft Entra ID
    /// </summary>
    public string? BearerAuth { get; set; }
    public CredentialProvider<string>? BearerAuthProvider { get; set; }
}
