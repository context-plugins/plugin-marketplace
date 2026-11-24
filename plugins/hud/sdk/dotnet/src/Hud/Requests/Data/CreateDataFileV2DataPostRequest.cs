using Hud.Models;

namespace Hud.Requests.Data;

/// <summary>
/// The inputs of the CreateDataFileV2DataPost operation.
/// </summary>
public sealed record CreateDataFileV2DataPostRequest
{
    public required DataFileCreateRequest Body { get; init; }
}
