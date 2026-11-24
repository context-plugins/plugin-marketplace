using System;

namespace Hud.Requests.Traces;

/// <summary>
/// The inputs of the UnpublishTraceV2TraceTraceIdPublishDelete operation.
/// </summary>
public sealed record UnpublishTraceV2TraceTraceIdPublishDeleteRequest
{
    public required Guid TraceId { get; init; }
}
