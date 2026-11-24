using System;
using System.Collections.Generic;
using Sapling.Core.Authentication;
using Sapling.Core.Authentication.OAuth2.AuthorizationCode;
using Sapling.Core.Configuration;
using Sapling.Core.Hooks;
using Sapling.Servers;

namespace Sapling;

public class SaplingClientOptions
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
    /// Sapling API key passed as the <c>key</c> query parameter, an alternative to the Authorization bearer header.
    /// </summary>
    public string? ApiKeyQuery { get; set; }
    public CredentialProvider<string>? ApiKeyQueryProvider { get; set; }
    /// <summary>
    /// Sapling API key. Language-tool operations also accept an OAuth access token from the Sapling authorization server — see the oauth2 scheme. The key may instead be sent as a <c>key</c> field in the JSON body, which takes precedence when both are present.
    /// </summary>
    public string? BearerAuth { get; set; }
    public CredentialProvider<string>? BearerAuthProvider { get; set; }
    /// <summary>
    /// OAuth 2.1 authorization code flow with PKCE (S256). Clients may register dynamically (RFC 7591) at https://api.sapling.ai/oauth/register; server metadata is at https://api.sapling.ai/.well-known/oauth-authorization-server. The access token is sent as an <c>Authorization: Bearer</c> header and is accepted only on the language-tool operations that advertise OAuth security. Other authenticated operations require an API key.
    /// </summary>
    public OAuth2AuthorizationCodeCredentials? Oauth2 { get; set; }
}
