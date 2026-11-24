using System;

namespace Hud.Requests.Storage;

/// <summary>
/// The inputs of the TraceWorkspaceChangesV2StorageTracesTraceIdWorkspaceChangesGet operation.
/// </summary>
public sealed record TraceWorkspaceChangesV2StorageTracesTraceIdWorkspaceChangesGetRequest
{
    public required Guid TraceId { get; init; }
}
