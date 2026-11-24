using System;
using Hud.Models;

namespace Hud.Requests.Traces;

/// <summary>
/// The inputs of the UpdateTraceV2TraceTraceIdPatch operation.
/// </summary>
public sealed record UpdateTraceV2TraceTraceIdPatchRequest
{
    public required Guid TraceId { get; init; }

    public required TraceUpdateRequest Body { get; init; }
}
