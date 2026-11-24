using AmazonRekognition.Models.Enums;

namespace AmazonRekognition.Requests.MediaAnalysisJob;

/// <summary>
/// The inputs of the ListMediaAnalysisJobs operation.
/// </summary>
public sealed record ListMediaAnalysisJobsOperationRequest
{
    public required XAmzTarget1AmazonRekognitionMediaAnalysisJobApi XAmzTarget { get; init; }
}
