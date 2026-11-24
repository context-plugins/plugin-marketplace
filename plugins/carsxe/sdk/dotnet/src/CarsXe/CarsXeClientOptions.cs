using System;
using System.Collections.Generic;
using CarsXe.Core.Authentication;
using CarsXe.Core.Configuration;
using CarsXe.Core.Hooks;
using CarsXe.Servers;

namespace CarsXe;

public class CarsXeClientOptions
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
    /// CarsXE API key from https://api.carsxe.com/dashboard, Your CarsXE API key, passed as the <c>key</c> query parameter., Your CarsXE API key, passed as the <c>key</c> query parameter., Your CarsXE API key, passed as the <c>key</c> query parameter., Your CarsXE API key, passed as the <c>key</c> query parameter., Your CarsXE API key, passed as the <c>key</c> query parameter., Your CarsXE API key, passed as the <c>key</c> query parameter., Your CarsXE API key, passed as the <c>key</c> query parameter., Your CarsXE API key, passed as the <c>key</c> query parameter., Your CarsXE API key, passed as the <c>key</c> query parameter.
    /// </summary>
    public string? ApiKeyQuery { get; set; }
    public CredentialProvider<string>? ApiKeyQueryProvider { get; set; }
    /// <summary>
    /// x402 payment proof for supported operations. Start without a CarsXE key to receive HTTP 402 payment requirements, then retry the identical request with the payment header produced by your x402 client. CarsXE also accepts the legacy X-PAYMENT header.
    /// </summary>
    public string? X402Payment { get; set; }
    public CredentialProvider<string>? X402PaymentProvider { get; set; }
    /// <summary>
    /// Batch-scoped token returned by an x402 Recalls Batch submission.
    /// </summary>
    public string? RecallsBatchToken { get; set; }
    public CredentialProvider<string>? RecallsBatchTokenProvider { get; set; }
}
