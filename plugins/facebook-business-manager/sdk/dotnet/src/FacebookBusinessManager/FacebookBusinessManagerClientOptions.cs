using System;
using System.Collections.Generic;
using FacebookBusinessManager.Core.Authentication;
using FacebookBusinessManager.Core.Configuration;
using FacebookBusinessManager.Core.Hooks;
using FacebookBusinessManager.Servers;

namespace FacebookBusinessManager;

public class FacebookBusinessManagerClientOptions
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
    /// OAuth 2.0 access token with ads_management or ads_read permissions. Obtain tokens via the Facebook Login flow., Page access token with appropriate permissions such as pages_manage_posts, pages_read_engagement, pages_manage_metadata., OAuth 2.0 access token with ads_management or ads_read permissions. Obtain tokens via the Facebook Login flow., OAuth 2.0 access token with ads_management or ads_read permissions. Obtain tokens via the Facebook Login flow., Page access token with appropriate permissions such as pages_manage_posts, pages_read_engagement, pages_manage_metadata., Page access token with appropriate permissions such as pages_manage_posts, pages_read_engagement, pages_manage_metadata., Page access token with appropriate permissions such as pages_manage_posts, pages_read_engagement, pages_manage_metadata., Page access token with appropriate permissions such as pages_manage_posts, pages_read_engagement, pages_manage_metadata., Page access token with appropriate permissions such as pages_manage_posts, pages_read_engagement, pages_manage_metadata.
    /// </summary>
    public string? BearerAuth { get; set; }
    public CredentialProvider<string>? BearerAuthProvider { get; set; }
}
