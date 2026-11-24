using AmazonRekognition.Models.Enums;

namespace AmazonRekognition.Requests.FaceLiveness;

/// <summary>
/// The inputs of the CreateFaceLivenessSession operation.
/// </summary>
public sealed record CreateFaceLivenessSessionOperationRequest
{
    public required XAmzTargetAmazonRekognitionFaceLivenessApi XAmzTarget { get; init; }
}
