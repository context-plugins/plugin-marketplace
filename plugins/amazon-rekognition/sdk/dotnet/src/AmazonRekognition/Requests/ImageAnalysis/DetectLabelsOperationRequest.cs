using AmazonRekognition.Models.Enums;

namespace AmazonRekognition.Requests.ImageAnalysis;

/// <summary>
/// The inputs of the DetectLabels operation.
/// </summary>
public sealed record DetectLabelsOperationRequest
{
    public required XAmzTargetAmazonRekognitionImageAnalysisApi XAmzTarget { get; init; }
}
