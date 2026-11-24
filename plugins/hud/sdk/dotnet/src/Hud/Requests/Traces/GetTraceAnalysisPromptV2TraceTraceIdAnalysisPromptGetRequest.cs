using System;

namespace Hud.Requests.Traces;

/// <summary>
/// The inputs of the GetTraceAnalysisPromptV2TraceTraceIdAnalysisPromptGet operation.
/// </summary>
public sealed record GetTraceAnalysisPromptV2TraceTraceIdAnalysisPromptGetRequest
{
    public required Guid TraceId { get; init; }
}
