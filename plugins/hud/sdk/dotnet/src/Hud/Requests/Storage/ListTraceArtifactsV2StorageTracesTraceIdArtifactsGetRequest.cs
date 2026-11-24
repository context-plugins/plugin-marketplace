using System;

namespace Hud.Requests.Storage;

/// <summary>
/// The inputs of the ListTraceArtifactsV2StorageTracesTraceIdArtifactsGet operation.
/// </summary>
public sealed record ListTraceArtifactsV2StorageTracesTraceIdArtifactsGetRequest
{
    public required Guid TraceId { get; init; }
}
