using AmazonLex.Models;

namespace AmazonLex.Requests.Versions;

/// <summary>
/// The inputs of the CreateSlotTypeVersion operation.
/// </summary>
public sealed record CreateSlotTypeVersionOperationRequest
{
    public required string Name { get; init; }

    public CreateSlotTypeVersionRequest? Body { get; init; }
}
