using System;

namespace Hud.Requests.Traces;

/// <summary>
/// The inputs of the GetTraceLogsV2TraceTraceIdLogsGet operation.
/// </summary>
public sealed record GetTraceLogsV2TraceTraceIdLogsGetRequest
{
    public required Guid TraceId { get; init; }
}
