namespace AmazonLex.Requests.Testexecutions;

/// <summary>
/// The inputs of the GetTestExecutionArtifactsUrl operation.
/// </summary>
public sealed record GetTestExecutionArtifactsUrlOperationRequest
{
    public required string TestExecutionId { get; init; }
}
