using AmazonLex.Models;

namespace AmazonLex.Requests.Versions;

/// <summary>
/// The inputs of the PutSlotType operation.
/// </summary>
public sealed record PutSlotTypeOperationRequest
{
    public required string Name { get; init; }

    public PutSlotTypeRequest? Body { get; init; }
}
