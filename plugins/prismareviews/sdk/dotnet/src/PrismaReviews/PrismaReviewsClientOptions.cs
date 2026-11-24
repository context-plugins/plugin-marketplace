using System;
using System.Collections.Generic;
using PrismaReviews.Core.Authentication;
using PrismaReviews.Core.Configuration;
using PrismaReviews.Core.Hooks;
using PrismaReviews.Servers;

namespace PrismaReviews;

public class PrismaReviewsClientOptions
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
    /// Your secret API key as a Bearer token: <c>pk_live_…</c> for real accounts, <c>pk_test_…</c> for sample data. Keep it on your server.
    /// </summary>
    public string? ApiKey { get; set; }
    public CredentialProvider<string>? ApiKeyProvider { get; set; }
}
