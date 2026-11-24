using System;

namespace Hud.Requests.Traces;

/// <summary>
/// The inputs of the GetTraceInfoV2TraceTraceIdInfoGet operation.
/// </summary>
public sealed record GetTraceInfoV2TraceTraceIdInfoGetRequest
{
    public required Guid TraceId { get; init; }
}
