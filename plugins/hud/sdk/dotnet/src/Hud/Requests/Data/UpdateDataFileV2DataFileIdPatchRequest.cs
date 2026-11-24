using System;
using Hud.Models;

namespace Hud.Requests.Data;

/// <summary>
/// The inputs of the UpdateDataFileV2DataFileIdPatch operation.
/// </summary>
public sealed record UpdateDataFileV2DataFileIdPatchRequest
{
    public required Guid FileId { get; init; }

    public required DataFileUpdateRequest Body { get; init; }
}
