using System;

namespace Hud.Requests.Traces;

/// <summary>
/// The inputs of the GetTraceUsageV2TraceTraceIdUsageGet operation.
/// </summary>
public sealed record GetTraceUsageV2TraceTraceIdUsageGetRequest
{
    public required Guid TraceId { get; init; }
}
