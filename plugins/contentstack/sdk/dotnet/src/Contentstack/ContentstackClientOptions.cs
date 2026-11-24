using System;
using System.Collections.Generic;
using Contentstack.Core.Authentication;
using Contentstack.Core.Configuration;
using Contentstack.Core.Hooks;
using Contentstack.Servers;

namespace Contentstack;

public class ContentstackClientOptions
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
    /// OAuth 2.0 Bearer token with launch:manage or launch.projects scopes., OAuth 2.0 Bearer token with appropriate Automate scopes., OAuth 2.0 Bearer token with personalize:manage or personalize:read scope., OAuth 2.0 Bearer token with personalize:manage or personalize:read scope., OAuth 2.0 Bearer token with appropriate Automate scopes., OAuth 2.0 Bearer token with appropriate Automate scopes., OAuth 2.0 Bearer token with brand-kits:manage scope., OAuth 2.0 Bearer token with launch:manage or launch.projects scopes., OAuth 2.0 Bearer token with launch:manage or launch.projects scopes., OAuth 2.0 Bearer token with personalize:manage or personalize:read scope., OAuth 2.0 Bearer token with appropriate Automate scopes., OAuth 2.0 Bearer token with personalize:manage or personalize:read scope., OAuth 2.0 Bearer token with launch:manage or launch.projects scopes., OAuth 2.0 Bearer token with personalize:manage or personalize:read scope., OAuth 2.0 Bearer token with brand-kits:manage scope., OAuth 2.0 Bearer token with appropriate Automate scopes., Bearer token from the Identity Provider client for SCIM authentication., Bearer token from the Identity Provider client for SCIM authentication., Bearer token from the Identity Provider client for SCIM authentication., OAuth 2.0 Bearer token with appropriate Automate scopes., OAuth 2.0 Bearer token with brand-kits:manage scope.
    /// </summary>
    public string? BearerAuth { get; set; }
    public CredentialProvider<string>? BearerAuthProvider { get; set; }
    /// <summary>
    /// Contentstack user authtoken for session-based authentication., User session token obtained from the login endpoint., Contentstack user authtoken for session-based authentication., Contentstack user authtoken for session-based authentication., Contentstack user authtoken for session-based authentication., Contentstack user authtoken for session-based authentication., Contentstack user authtoken for session-based authentication., User session token obtained from the login endpoint., Contentstack user authtoken for session-based authentication., User session token obtained from the login endpoint., User session token obtained from the login endpoint., Contentstack user authtoken for session-based authentication., Contentstack user authtoken for session-based authentication., Contentstack user authtoken for session-based authentication., Contentstack user authtoken for session-based authentication., Contentstack user authtoken for session-based authentication., Contentstack user authtoken for session-based authentication., User session token obtained from the login endpoint., Contentstack user authtoken for session-based authentication., User session token obtained from the login endpoint., User session token obtained from the login endpoint., User session token obtained from the login endpoint., Contentstack user authtoken for session-based authentication., Contentstack user authtoken for session-based authentication.
    /// </summary>
    public string? AuthtokenAuth { get; set; }
    public CredentialProvider<string>? AuthtokenAuthProvider { get; set; }
    /// <summary>
    /// The API key for the Contentstack stack.
    /// </summary>
    public string? ApiKey { get; set; }
    public CredentialProvider<string>? ApiKeyProvider { get; set; }
    /// <summary>
    /// The delivery token granting read access to the stack environment.
    /// </summary>
    public string? DeliveryToken { get; set; }
    public CredentialProvider<string>? DeliveryTokenProvider { get; set; }
    /// <summary>
    /// Management token in the format "Bearer {management_token}" for server-to-server authentication without user sessions.
    /// </summary>
    public string? ManagementTokenAuth { get; set; }
    public CredentialProvider<string>? ManagementTokenAuthProvider { get; set; }
}
