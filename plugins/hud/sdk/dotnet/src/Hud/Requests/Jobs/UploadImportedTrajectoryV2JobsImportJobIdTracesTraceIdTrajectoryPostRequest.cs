using System;
using Hud.Models;

namespace Hud.Requests.Jobs;

/// <summary>
/// The inputs of the UploadImportedTrajectoryV2JobsImportJobIdTracesTraceIdTrajectoryPost operation.
/// </summary>
public sealed record UploadImportedTrajectoryV2JobsImportJobIdTracesTraceIdTrajectoryPostRequest
{
    public required Guid JobId { get; init; }

    public required Guid TraceId { get; init; }

    public required AtifTrajectory Body { get; init; }
}
