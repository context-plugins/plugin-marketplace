using System;
using System.Collections.Generic;
using Deliverd.Core.Authentication;
using Deliverd.Core.Configuration;
using Deliverd.Core.Hooks;
using Deliverd.Servers;

namespace Deliverd;

public class DeliverdClientOptions
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
    /// API key (dlv_…) created in Settings → API tokens, or an OAuth access token (dlvo_…). Every route below can answer <c>401 auth_error</c> — the credential was not accepted — or <c>403 insufficient_scope</c>, which is a different thing: the credential is fine and was not issued with the scope this route needs. Reissue it with that scope rather than replacing it with another of the same ones. Older clients may still branch on <c>auth_error</c> for both.
    /// </summary>
    public string? BearerAuth { get; set; }
    public CredentialProvider<string>? BearerAuthProvider { get; set; }
}
