using System;

namespace Hud.Requests.Traces;

/// <summary>
/// The inputs of the GetTraceAnalysisContextV2TraceTraceIdAnalysisContextGet operation.
/// </summary>
public sealed record GetTraceAnalysisContextV2TraceTraceIdAnalysisContextGetRequest
{
    public required Guid TraceId { get; init; }

    public bool IncludeSpans { get; init; } = true;

    public bool IncludeEnvLogs { get; init; } = true;

    public bool IncludeWorkerLogs { get; init; } = true;
}
