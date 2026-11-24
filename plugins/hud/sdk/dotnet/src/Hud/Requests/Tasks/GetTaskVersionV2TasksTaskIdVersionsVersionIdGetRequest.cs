using System;

namespace Hud.Requests.Tasks;

/// <summary>
/// The inputs of the GetTaskVersionV2TasksTaskIdVersionsVersionIdGet operation.
/// </summary>
public sealed record GetTaskVersionV2TasksTaskIdVersionsVersionIdGetRequest
{
    public required Guid TaskId { get; init; }

    public required Guid VersionId { get; init; }
}
