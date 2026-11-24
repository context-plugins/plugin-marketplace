using System;

namespace Hud.Requests.Storage;

/// <summary>
/// The inputs of the TraceWorkspaceFilesV2StorageTracesTraceIdWorkspaceFilesGet operation.
/// </summary>
public sealed record TraceWorkspaceFilesV2StorageTracesTraceIdWorkspaceFilesGetRequest
{
    public required Guid TraceId { get; init; }
}
