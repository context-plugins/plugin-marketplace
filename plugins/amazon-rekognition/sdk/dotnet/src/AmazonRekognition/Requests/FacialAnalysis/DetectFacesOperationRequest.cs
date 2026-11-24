using AmazonRekognition.Models.Enums;

namespace AmazonRekognition.Requests.FacialAnalysis;

/// <summary>
/// The inputs of the DetectFaces operation.
/// </summary>
public sealed record DetectFacesOperationRequest
{
    public required XAmzTarget1AmazonRekognitionFacialAnalysisApi XAmzTarget { get; init; }
}
