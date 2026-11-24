using System;

namespace Hud.Requests.Jobs;

/// <summary>
/// The inputs of the FinishImportedJobV2JobsImportJobIdFinishPost operation.
/// </summary>
public sealed record FinishImportedJobV2JobsImportJobIdFinishPostRequest
{
    public required Guid JobId { get; init; }
}
