using AmazonRekognition.Models.Enums;

namespace AmazonRekognition.Requests.MediaAnalysisJob;

/// <summary>
/// The inputs of the GetMediaAnalysisJob operation.
/// </summary>
public sealed record GetMediaAnalysisJobOperationRequest
{
    public required XAmzTargetAmazonRekognitionMediaAnalysisJobApi XAmzTarget { get; init; }
}
