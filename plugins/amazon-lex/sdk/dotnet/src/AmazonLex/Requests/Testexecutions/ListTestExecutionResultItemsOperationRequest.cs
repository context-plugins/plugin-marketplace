using AmazonLex.Models;

namespace AmazonLex.Requests.Testexecutions;

/// <summary>
/// The inputs of the ListTestExecutionResultItems operation.
/// </summary>
public sealed record ListTestExecutionResultItemsOperationRequest
{
    public required string TestExecutionId { get; init; }

    public ListTestExecutionResultItemsRequest? Body { get; init; }
}
