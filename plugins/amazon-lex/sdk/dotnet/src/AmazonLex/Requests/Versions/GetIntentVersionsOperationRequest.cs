namespace AmazonLex.Requests.Versions;

/// <summary>
/// The inputs of the GetIntentVersions operation.
/// </summary>
public sealed record GetIntentVersionsOperationRequest
{
    public required string Name { get; init; }
}
