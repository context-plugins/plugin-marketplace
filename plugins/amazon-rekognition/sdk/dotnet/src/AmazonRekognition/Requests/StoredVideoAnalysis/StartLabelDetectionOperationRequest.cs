using AmazonRekognition.Models.Enums;

namespace AmazonRekognition.Requests.StoredVideoAnalysis;

/// <summary>
/// The inputs of the StartLabelDetection operation.
/// </summary>
public sealed record StartLabelDetectionOperationRequest
{
    public required XAmzTarget1AmazonRekognitionStoredVideoAnalysisApi XAmzTarget { get; init; }
}
