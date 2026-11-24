using AmazonRekognition.Models.Enums;

namespace AmazonRekognition.Requests.Operations;

/// <summary>
/// The inputs of the DistributeDatasetEntries operation.
/// </summary>
public sealed record DistributeDatasetEntriesOperationRequest
{
    public required XAmzTarget8 XAmzTarget { get; init; }
}
