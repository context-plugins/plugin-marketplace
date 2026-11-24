using AmazonLex.Models;

namespace AmazonLex.Requests.Testexecutions;

/// <summary>
/// The inputs of the ListTestExecutions operation.
/// </summary>
public sealed record ListTestExecutionsOperationRequest
{
    public ListTestExecutionsRequest? Body { get; init; }
}
