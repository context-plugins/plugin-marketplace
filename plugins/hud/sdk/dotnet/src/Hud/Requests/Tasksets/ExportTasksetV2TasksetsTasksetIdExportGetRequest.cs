using System;

namespace Hud.Requests.Tasksets;

/// <summary>
/// The inputs of the ExportTasksetV2TasksetsTasksetIdExportGet operation.
/// </summary>
public sealed record ExportTasksetV2TasksetsTasksetIdExportGetRequest
{
    public required Guid TasksetId { get; init; }
}
