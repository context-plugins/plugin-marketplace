using AmazonRekognition.Models.Enums;

namespace AmazonRekognition.Requests.Operations;

/// <summary>
/// The inputs of the CopyProjectVersion operation.
/// </summary>
public sealed record CopyProjectVersionOperationRequest
{
    public required XAmzTarget1AmazonRekognitionOperationsApi XAmzTarget { get; init; }
}
