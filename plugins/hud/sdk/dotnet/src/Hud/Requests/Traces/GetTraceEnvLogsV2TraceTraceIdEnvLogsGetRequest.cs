using System;

namespace Hud.Requests.Traces;

/// <summary>
/// The inputs of the GetTraceEnvLogsV2TraceTraceIdEnvLogsGet operation.
/// </summary>
public sealed record GetTraceEnvLogsV2TraceTraceIdEnvLogsGetRequest
{
    public required Guid TraceId { get; init; }
}
