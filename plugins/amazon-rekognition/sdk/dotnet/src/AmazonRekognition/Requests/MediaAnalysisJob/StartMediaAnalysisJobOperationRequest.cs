using AmazonRekognition.Models.Enums;

namespace AmazonRekognition.Requests.MediaAnalysisJob;

/// <summary>
/// The inputs of the StartMediaAnalysisJob operation.
/// </summary>
public sealed record StartMediaAnalysisJobOperationRequest
{
    public required XAmzTarget2AmazonRekognitionMediaAnalysisJobApi XAmzTarget { get; init; }
}
