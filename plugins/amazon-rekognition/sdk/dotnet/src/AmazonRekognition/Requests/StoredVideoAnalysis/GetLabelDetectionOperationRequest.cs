using AmazonRekognition.Models.Enums;

namespace AmazonRekognition.Requests.StoredVideoAnalysis;

/// <summary>
/// The inputs of the GetLabelDetection operation.
/// </summary>
public sealed record GetLabelDetectionOperationRequest
{
    public required XAmzTargetAmazonRekognitionStoredVideoAnalysisApi XAmzTarget { get; init; }
}
