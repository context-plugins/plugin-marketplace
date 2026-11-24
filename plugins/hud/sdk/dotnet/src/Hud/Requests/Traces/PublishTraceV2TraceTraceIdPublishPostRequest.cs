using System;

namespace Hud.Requests.Traces;

/// <summary>
/// The inputs of the PublishTraceV2TraceTraceIdPublishPost operation.
/// </summary>
public sealed record PublishTraceV2TraceTraceIdPublishPostRequest
{
    public required Guid TraceId { get; init; }
}
