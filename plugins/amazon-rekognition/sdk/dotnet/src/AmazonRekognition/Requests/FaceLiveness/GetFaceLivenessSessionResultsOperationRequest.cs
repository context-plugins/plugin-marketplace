using AmazonRekognition.Models.Enums;

namespace AmazonRekognition.Requests.FaceLiveness;

/// <summary>
/// The inputs of the GetFaceLivenessSessionResults operation.
/// </summary>
public sealed record GetFaceLivenessSessionResultsOperationRequest
{
    public required XAmzTarget1AmazonRekognitionFaceLivenessApi XAmzTarget { get; init; }
}
