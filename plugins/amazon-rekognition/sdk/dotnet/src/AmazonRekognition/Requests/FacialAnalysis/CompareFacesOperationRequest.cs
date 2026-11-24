using AmazonRekognition.Models.Enums;

namespace AmazonRekognition.Requests.FacialAnalysis;

/// <summary>
/// The inputs of the CompareFaces operation.
/// </summary>
public sealed record CompareFacesOperationRequest
{
    public required XAmzTargetAmazonRekognitionFacialAnalysisApi XAmzTarget { get; init; }
}
