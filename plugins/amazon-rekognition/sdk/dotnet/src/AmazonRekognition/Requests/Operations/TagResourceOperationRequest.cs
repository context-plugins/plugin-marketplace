using AmazonRekognition.Models.Enums;

namespace AmazonRekognition.Requests.Operations;

/// <summary>
/// The inputs of the TagResource operation.
/// </summary>
public sealed record TagResourceOperationRequest
{
    public required XAmzTarget24 XAmzTarget { get; init; }
}
