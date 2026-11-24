using System;
using System.Collections.Generic;
using PlinthUsGrantsData.Core.Authentication;
using PlinthUsGrantsData.Core.Configuration;
using PlinthUsGrantsData.Core.Hooks;
using PlinthUsGrantsData.Servers;

namespace PlinthUsGrantsData;

public class PlinthUsGrantsDataClientOptions
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
    /// Free key includes 50 calls a month; higher volume on a paid plan. Get one at https://data.useplinth.com/pricing., Free key includes 50 calls a day across /grants/*; the organization endpoints and SQL need a paid plan. Get one at https://data.useplinth.com/pricing., Free key includes 50 calls a day across /grants/*; the organization endpoints and SQL need a paid plan. Get one at https://data.useplinth.com/pricing., Free key includes 50 calls a month; higher volume on a paid plan. Get one at https://data.useplinth.com/pricing., Free key includes 50 calls a day across /grants/*; the organization endpoints and SQL need a paid plan. Get one at https://data.useplinth.com/pricing., Free key includes 50 calls a month; higher volume on a paid plan. Get one at https://data.useplinth.com/pricing., Free key includes 50 calls a day across /grants/*; the organization endpoints and SQL need a paid plan. Get one at https://data.useplinth.com/pricing., Free key includes 50 calls a month; higher volume on a paid plan. Get one at https://data.useplinth.com/pricing., Free key includes 50 calls a month; higher volume on a paid plan. Get one at https://data.useplinth.com/pricing.
    /// </summary>
    public string? ApiKeyAuth { get; set; }
    public CredentialProvider<string>? ApiKeyAuthProvider { get; set; }
}
