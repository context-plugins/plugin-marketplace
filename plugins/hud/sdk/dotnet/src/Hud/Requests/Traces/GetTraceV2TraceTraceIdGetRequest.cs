using System;

namespace Hud.Requests.Traces;

/// <summary>
/// The inputs of the GetTraceV2TraceTraceIdGet operation.
/// </summary>
public sealed record GetTraceV2TraceTraceIdGetRequest
{
    public required Guid TraceId { get; init; }
}
