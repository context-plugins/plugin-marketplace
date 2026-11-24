using System;
using System.Collections.Generic;
using Mailboxlayer.Core.Authentication;
using Mailboxlayer.Core.Configuration;
using Mailboxlayer.Core.Hooks;
using Mailboxlayer.Servers;

namespace Mailboxlayer;

public class MailboxlayerClientOptions
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
    /// Your Mailboxlayer API access key; pass as <c>access_key</c> query parameter.
    /// </summary>
    public string? AccessKeyQuery { get; set; }
    public CredentialProvider<string>? AccessKeyQueryProvider { get; set; }
}
