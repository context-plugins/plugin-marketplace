using AmazonLex.Models;

namespace AmazonLex.Requests.Testsets;

/// <summary>
/// The inputs of the ListTestSets operation.
/// </summary>
public sealed record ListTestSetsOperationRequest
{
    public ListTestSetsRequest? Body { get; init; }
}
