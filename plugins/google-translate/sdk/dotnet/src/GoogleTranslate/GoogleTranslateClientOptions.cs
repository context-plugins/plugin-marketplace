using System;
using System.Collections.Generic;
using GoogleTranslate.Core.Authentication;
using GoogleTranslate.Core.Authentication.OAuth2.AuthorizationCode;
using GoogleTranslate.Core.Configuration;
using GoogleTranslate.Core.Hooks;
using GoogleTranslate.Servers;

namespace GoogleTranslate;

public class GoogleTranslateClientOptions
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
    /// API key; accepted by methods that do not need user data.
    /// </summary>
    public string? ApiKey { get; set; }
    public CredentialProvider<string>? ApiKeyProvider { get; set; }
    public OAuth2AuthorizationCodeCredentials? Oauth2 { get; set; }
}
