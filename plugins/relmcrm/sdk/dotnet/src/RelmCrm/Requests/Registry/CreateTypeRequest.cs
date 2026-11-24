using RelmCrm.Models;

namespace RelmCrm.Requests.Registry;

/// <summary>
/// The inputs of the CreateType operation.
/// </summary>
public sealed record CreateTypeRequest
{
    public required TypesRequest Body { get; init; }
}
