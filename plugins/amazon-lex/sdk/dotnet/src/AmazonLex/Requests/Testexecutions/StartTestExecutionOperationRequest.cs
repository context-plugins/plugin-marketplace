using AmazonLex.Models;

namespace AmazonLex.Requests.Testexecutions;

/// <summary>
/// The inputs of the StartTestExecution operation.
/// </summary>
public sealed record StartTestExecutionOperationRequest
{
    public required string TestSetId { get; init; }

    public StartTestExecutionRequest? Body { get; init; }
}
