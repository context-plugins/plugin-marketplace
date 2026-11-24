using AmazonRekognition.Models.Enums;

namespace AmazonRekognition.Requests.Operations;

/// <summary>
/// The inputs of the ListDatasetEntries operation.
/// </summary>
public sealed record ListDatasetEntriesOperationRequest
{
    public required XAmzTarget20 XAmzTarget { get; init; }
}
