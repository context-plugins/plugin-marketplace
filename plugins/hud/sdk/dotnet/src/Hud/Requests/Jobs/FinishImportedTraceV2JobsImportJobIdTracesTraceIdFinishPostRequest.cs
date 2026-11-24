using System;
using Hud.Models;

namespace Hud.Requests.Jobs;

/// <summary>
/// The inputs of the FinishImportedTraceV2JobsImportJobIdTracesTraceIdFinishPost operation.
/// </summary>
public sealed record FinishImportedTraceV2JobsImportJobIdTracesTraceIdFinishPostRequest
{
    public required Guid JobId { get; init; }

    public required Guid TraceId { get; init; }

    public required JobImportTraceResult Body { get; init; }
}
