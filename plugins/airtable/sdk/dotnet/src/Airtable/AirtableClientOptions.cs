using System;
using System.Collections.Generic;
using Airtable.Core.Authentication;
using Airtable.Core.Configuration;
using Airtable.Core.Hooks;
using Airtable.Servers;

namespace Airtable;

public class AirtableClientOptions
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
    /// Airtable uses Bearer token authentication. Provide a personal access token or OAuth access token with schema.bases:read or schema.bases:write scopes., Airtable uses Bearer token authentication. Provide a personal access token or OAuth access token in the Authorization header., Airtable uses Bearer token authentication. Provide a personal access token or OAuth access token with schema.bases:read or schema.bases:write scopes., SCIM API uses Bearer token authentication with a SCIM API token generated from the Airtable enterprise admin panel., Airtable uses Bearer token authentication. Provide a personal access token or OAuth access token in the Authorization header., Airtable uses Bearer token authentication. Provide a personal access token or OAuth access token with schema.bases:read or schema.bases:write scopes., SCIM API uses Bearer token authentication with a SCIM API token generated from the Airtable enterprise admin panel., Airtable uses Bearer token authentication. Provide a personal access token or OAuth access token in the Authorization header.
    /// </summary>
    public string? BearerAuth { get; set; }
    public CredentialProvider<string>? BearerAuthProvider { get; set; }
}
