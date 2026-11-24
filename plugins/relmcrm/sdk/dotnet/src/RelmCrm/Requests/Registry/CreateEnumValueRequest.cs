using RelmCrm.Models;

namespace RelmCrm.Requests.Registry;

/// <summary>
/// The inputs of the CreateEnumValue operation.
/// </summary>
public sealed record CreateEnumValueRequest
{
    public required EnumsRequest Body { get; init; }
}
