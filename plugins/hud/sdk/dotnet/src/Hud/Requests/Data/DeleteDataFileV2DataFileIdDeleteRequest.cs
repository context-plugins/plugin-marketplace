using System;

namespace Hud.Requests.Data;

/// <summary>
/// The inputs of the DeleteDataFileV2DataFileIdDelete operation.
/// </summary>
public sealed record DeleteDataFileV2DataFileIdDeleteRequest
{
    public required Guid FileId { get; init; }
}
