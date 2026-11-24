using System;
using System.Collections.Generic;
using Lusha.Core.Authentication;
using Lusha.Core.Configuration;
using Lusha.Core.Hooks;
using Lusha.Servers;

namespace Lusha;

public class LushaClientOptions
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
    /// Your Lusha API key. You can find this in your Lusha dashboard under API settings.
    /// Include this key in the <c>api_key</c> header for all requests.
    /// , Your Lusha API key. You can find this in your Lusha dashboard under API settings.
    /// <para>
    /// Include this key in the <c>api_key</c> header for all requests., Your Lusha API key. You can find this in your Lusha dashboard under API settings.
    /// Include this key in the <c>api_key</c> header for all requests., Your Lusha API key. You can find this in your Lusha dashboard under API settings.
    /// Include this key in the <c>api_key</c> header for all requests., Your Lusha API key. You can find this in your Lusha dashboard under API settings.
    /// </para>
    /// <para>
    /// Include this key in the <c>api_key</c> header for all requests., Your Lusha API key. You can find this in your Lusha dashboard under API settings.
    /// </para>
    /// <para>
    /// Include this key in the <c>api_key</c> header for all requests., Your Lusha API key. You can find this in your Lusha dashboard under API settings.
    /// Include this key in the <c>api_key</c> header for all requests., Your Lusha API key. You can find this in your Lusha dashboard under API settings.
    /// Include this key in the <c>api_key</c> header for all requests., Your Lusha API key. You can find this in your Lusha dashboard under API settings.
    /// </para>
    /// <para>
    /// Include this key in the <c>api_key</c> header for all requests., Your Lusha API key. You can find this in your Lusha dashboard under API settings.
    /// Include this key in the <c>api_key</c> header for all requests., Your Lusha API key. You can find this in your Lusha dashboard under API settings.
    /// Include this key in the <c>api_key</c> header for all requests., Your Lusha API key. You can find this in your Lusha dashboard under API settings.
    /// Include this key in the <c>api_key</c> header for all requests., Your Lusha API key. You can find this in your Lusha dashboard under API settings.
    /// </para>
    /// <para>
    /// Include this key in the <c>api_key</c> header for all requests., Your Lusha API key. You can find this in your Lusha dashboard under API settings.
    /// Include this key in the <c>api_key</c> header for all requests., Your Lusha API key. You can find this in your Lusha dashboard under API settings.
    /// Include this key in the <c>api_key</c> header for all requests., Your Lusha API key. You can find this in your Lusha dashboard under API settings.
    /// Include this key in the <c>api_key</c> header for all requests., Your Lusha API key. You can find this in your Lusha dashboard under API settings.
    /// Include this key in the <c>api_key</c> header for all requests., Your Lusha API key. You can find this in your Lusha dashboard under API settings.
    /// Include this key in the <c>api_key</c> header for all requests.
    /// </para>
    /// </summary>
    public string? ApiKeyAuth { get; set; }
    public CredentialProvider<string>? ApiKeyAuthProvider { get; set; }
}
