using RelmCrm.Models;

namespace RelmCrm.Requests.Registry;

/// <summary>
/// The inputs of the CreateField operation.
/// </summary>
public sealed record CreateFieldRequest
{
    public required FieldsRequest Body { get; init; }
}
