using System;
using System.Collections.Generic;
using System.Net;
using System.Net.Http;

namespace Search1Api.Core.Configuration;

public record RetryOptions
{
    public required IReadOnlyList<HttpStatusCode> StatusCodesToRetry { get; init; }
    public required IReadOnlyList<HttpMethod> HttpMethodsToRetry { get; init; }
    public required int MaxRetries { get; init; }
    public required TimeSpan Delay { get; init; }

    public required TimeSpan? Timeout { get; init; }
    public required int BackOffFactor { get; init; }
    public required bool UseExponentialBackoff { get; init; }
    public required TimeSpan MaxJitter { get; init; }
    public required Action<RetryAttempt>? OnRetry { get; init; }

    public static RetryOptions Default() => new()
    {
        StatusCodesToRetry =
        [
            HttpStatusCode.RequestTimeout,
            (HttpStatusCode)429, // HttpStatusCode.TooManyRequests
            HttpStatusCode.InternalServerError,
            HttpStatusCode.BadGateway,
            HttpStatusCode.ServiceUnavailable,
            HttpStatusCode.GatewayTimeout
        ],
        HttpMethodsToRetry =
        [
            HttpMethod.Get,
            HttpMethod.Head,
            HttpMethod.Put,
            HttpMethod.Options
        ],
        MaxRetries = 3,
        Delay = TimeSpan.FromSeconds(1),
        BackOffFactor = 2,
        UseExponentialBackoff = true,
        MaxJitter = TimeSpan.FromMilliseconds(500),
        OnRetry = null,
        Timeout = TimeSpan.FromSeconds(100)
    };
    
    public static RetryOptions Disabled() => Default() with { MaxRetries = 0 };
}
