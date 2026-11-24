using AmazonLex.Models;

namespace AmazonLex.Requests.Operations;

/// <summary>
/// The inputs of the DeleteSlotTypeVersion operation.
/// </summary>
public sealed record DeleteSlotTypeVersionOperationRequest
{
    public required string Name { get; init; }

    public required string Version { get; init; }

    public DeleteSlotTypeVersionRequest? Body { get; init; }
}
