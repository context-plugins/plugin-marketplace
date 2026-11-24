namespace AmazonLex.Requests.Versions;

/// <summary>
/// The inputs of the GetSlotType operation.
/// </summary>
public sealed record GetSlotTypeOperationRequest
{
    public required string Name { get; init; }

    public required string Version { get; init; }
}
