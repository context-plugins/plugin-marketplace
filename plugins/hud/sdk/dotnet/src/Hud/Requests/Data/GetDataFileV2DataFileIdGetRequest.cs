using System;

namespace Hud.Requests.Data;

/// <summary>
/// The inputs of the GetDataFileV2DataFileIdGet operation.
/// </summary>
public sealed record GetDataFileV2DataFileIdGetRequest
{
    public required Guid FileId { get; init; }
}
