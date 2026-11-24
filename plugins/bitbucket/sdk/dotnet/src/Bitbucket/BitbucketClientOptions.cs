using System;
using System.Collections.Generic;
using Bitbucket.Core.Authentication;
using Bitbucket.Core.Authentication.Basic;
using Bitbucket.Core.Authentication.OAuth2.AuthorizationCode;
using Bitbucket.Core.Configuration;
using Bitbucket.Core.Hooks;
using Bitbucket.Servers;

namespace Bitbucket;

public class BitbucketClientOptions
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
    /// Basic HTTP Authentication as per <see href="https://tools.ietf.org/html/rfc2617">RFC-2617</see> (Digest not supported). Note that Basic Auth is available only with username and app password as credentials.
    /// </summary>
    public BasicAuthCredentials? Basic { get; set; }
    public CredentialProvider<BasicAuthCredentials>? BasicProvider { get; set; }
    /// <summary>
    /// OAuth 2 as per <see href="https://tools.ietf.org/html/rfc6749">RFC-6749</see>.
    /// </summary>
    public OAuth2AuthorizationCodeCredentials? Oauth2 { get; set; }
    /// <summary>
    /// API Keys can be used as Basic HTTP Authentication credentials and provide a substitute for the account's actual username and password. API Keys are only available to team accounts and there is only 1 key per account. API Keys do not support scopes and have therefore access to all contents of the account.
    /// </summary>
    public string? ApiKey { get; set; }
    public CredentialProvider<string>? ApiKeyProvider { get; set; }
}
