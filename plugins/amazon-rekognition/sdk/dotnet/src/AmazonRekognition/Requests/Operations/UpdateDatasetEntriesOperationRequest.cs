using AmazonRekognition.Models.Enums;

namespace AmazonRekognition.Requests.Operations;

/// <summary>
/// The inputs of the UpdateDatasetEntries operation.
/// </summary>
public sealed record UpdateDatasetEntriesOperationRequest
{
    public required XAmzTarget21 XAmzTarget { get; init; }
}
