using System;
using System.Collections.Generic;
using DoiT.Core.Authentication;
using DoiT.Core.Authentication.OAuth2.AuthorizationCode;
using DoiT.Core.Configuration;
using DoiT.Core.Hooks;
using DoiT.Servers;

namespace DoiT;

public class DoiTClientOptions
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
    /// Use the "Bearer &lt;API_KEY&gt;" format or sign in for autofill
    /// </summary>
    public string? ApiKey { get; set; }
    public CredentialProvider<string>? ApiKeyProvider { get; set; }
    /// <summary>
    /// Customer (tenant) ID for the request. Separate from your API token: always authenticate with <c>Authorization: Bearer &lt;token&gt;</c> (personal or service account). See <see href="https://developer.doit.com/docs/start">Get Started</see>. Omit when your token is scoped to a single customer (resolved automatically). A service account can select an active direct or nested descendant of its home customer; the endpoint's normal permissions, entitlements, and resource-ownership checks still apply. A service-account target outside that customer subtree returns <c>403 Forbidden</c>. Prefer this header over the legacy <c>customerContext</c> query parameter, which only applies to legacy API keys and is ignored by personal and service account tokens.
    /// </summary>
    public string? TenantId { get; set; }
    public CredentialProvider<string>? TenantIdProvider { get; set; }
    public OAuth2AuthorizationCodeCredentials? Oauth2 { get; set; }
}
