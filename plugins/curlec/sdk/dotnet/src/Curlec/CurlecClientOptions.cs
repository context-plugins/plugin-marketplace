using System;
using System.Collections.Generic;
using Curlec.Core.Authentication;
using Curlec.Core.Authentication.Basic;
using Curlec.Core.Authentication.OAuth2.AuthorizationCode;
using Curlec.Core.Authentication.OAuth2.ClientCredentials;
using Curlec.Core.Configuration;
using Curlec.Core.Hooks;
using Curlec.Servers;

namespace Curlec;

public class CurlecClientOptions
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
    /// HTTP Basic authentication using your Razorpay API key pair. Use key_id as the username and key_secret as the password. Encode as Base64(key_id:key_secret). Keys are environment-scoped (Test vs Live). Obtain keys at https://dashboard.razorpay.com/app/keys. Keys are case-sensitive.
    /// </summary>
    public BasicAuthCredentials? BasicAuth { get; set; }
    public CredentialProvider<BasicAuthCredentials>? BasicAuthProvider { get; set; }
    /// <summary>
    /// OAuth 2.0 via the Razorpay MCP server (mcp.razorpay.com). Supports Authorization Code with PKCE (S256) for user-delegated access and Client Credentials for server-to-server access. Tokens expire in 3600 seconds. Dynamic Client Registration available at the registration endpoint. For integration setup see https://razorpay.com/docs/build/llm-docs/mcp-server/oauth.md.
    /// </summary>
    public OAuth2AuthorizationCodeCredentials? Oauth2AuthorizationCode { get; set; }
    /// <summary>
    /// OAuth 2.0 via the Razorpay MCP server (mcp.razorpay.com). Supports Authorization Code with PKCE (S256) for user-delegated access and Client Credentials for server-to-server access. Tokens expire in 3600 seconds. Dynamic Client Registration available at the registration endpoint. For integration setup see https://razorpay.com/docs/build/llm-docs/mcp-server/oauth.md.
    /// </summary>
    public OAuth2ClientCredentials? Oauth2ClientCredentials { get; set; }
}
