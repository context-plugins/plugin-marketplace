using Hud.Models;

namespace Hud.Requests.Data;

/// <summary>
/// The inputs of the DeleteDataFilesV2DataDeletePost operation.
/// </summary>
public sealed record DeleteDataFilesV2DataDeletePostRequest
{
    public required DataFileIdsRequest Body { get; init; }
}
