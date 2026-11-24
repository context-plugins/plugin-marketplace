namespace AmazonLex.Requests.Versions;

/// <summary>
/// The inputs of the GetSlotTypeVersions operation.
/// </summary>
public sealed record GetSlotTypeVersionsOperationRequest
{
    public required string Name { get; init; }
}
