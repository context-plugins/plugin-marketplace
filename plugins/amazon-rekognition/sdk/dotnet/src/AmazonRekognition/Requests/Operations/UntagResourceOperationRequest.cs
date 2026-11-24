using AmazonRekognition.Models.Enums;

namespace AmazonRekognition.Requests.Operations;

/// <summary>
/// The inputs of the UntagResource operation.
/// </summary>
public sealed record UntagResourceOperationRequest
{
    public required XAmzTarget25 XAmzTarget { get; init; }
}
