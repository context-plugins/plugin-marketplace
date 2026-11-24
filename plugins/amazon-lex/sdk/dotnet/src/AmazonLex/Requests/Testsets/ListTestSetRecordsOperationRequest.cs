using AmazonLex.Models;

namespace AmazonLex.Requests.Testsets;

/// <summary>
/// The inputs of the ListTestSetRecords operation.
/// </summary>
public sealed record ListTestSetRecordsOperationRequest
{
    public required string TestSetId { get; init; }

    public ListTestSetRecordsRequest? Body { get; init; }
}
