using System;

namespace Hud.Requests.Data;

/// <summary>
/// The inputs of the DownloadDataFileV2DataFileIdDownloadGet operation.
/// </summary>
public sealed record DownloadDataFileV2DataFileIdDownloadGetRequest
{
    public required Guid FileId { get; init; }
}
