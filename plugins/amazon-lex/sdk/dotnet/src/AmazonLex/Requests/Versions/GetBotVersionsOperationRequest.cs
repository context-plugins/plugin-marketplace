namespace AmazonLex.Requests.Versions;

/// <summary>
/// The inputs of the GetBotVersions operation.
/// </summary>
public sealed record GetBotVersionsOperationRequest
{
    public required string Name { get; init; }
}
