using System;
using System.Collections.Generic;
using Boomi.Core.Authentication;
using Boomi.Core.Authentication.Basic;
using Boomi.Core.Configuration;
using Boomi.Core.Hooks;
using Boomi.Servers;

namespace Boomi;

public class BoomiClientOptions
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
    /// Basic Authentication using username (email) and API token. The account ID must also be included in the URL path., Basic Authentication for the DataHub Platform API. Users with two-factor authentication must include an X-Boomi-OTP header., Basic Authentication for the DataHub Platform API. Users with two-factor authentication must include an X-Boomi-OTP header., Basic Authentication using username (email) and API token. The account ID must also be included in the URL path., Basic Authentication for the DataHub Platform API. Users with two-factor authentication must include an X-Boomi-OTP header., Basic Authentication for the DataHub Platform API. Users with two-factor authentication must include an X-Boomi-OTP header., Basic Authentication for the DataHub Platform API. Users with two-factor authentication must include an X-Boomi-OTP header.
    /// </summary>
    public BasicAuthCredentials? BasicAuth { get; set; }
    public CredentialProvider<BasicAuthCredentials>? BasicAuthProvider { get; set; }
    /// <summary>
    /// JWT Bearer token for the Repository API., Environment Token obtained from the Boomi Event Streams UI. Include as Authorization: Bearer {environment_token}., JWT Bearer token for the Repository API., JWT Bearer token for the Repository API., JWT Bearer token for the Repository API., JWT Bearer token for the Repository API.
    /// </summary>
    public string? BearerAuth { get; set; }
    public CredentialProvider<string>? BearerAuthProvider { get; set; }
}
