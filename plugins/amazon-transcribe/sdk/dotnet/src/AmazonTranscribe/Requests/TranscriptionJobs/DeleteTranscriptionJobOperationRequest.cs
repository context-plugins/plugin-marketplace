using AmazonTranscribe.Models.Enums;

namespace AmazonTranscribe.Requests.TranscriptionJobs;

/// <summary>
/// The inputs of the DeleteTranscriptionJob operation.
/// </summary>
public sealed record DeleteTranscriptionJobOperationRequest
{
    public required XAmzTargetAmazonTranscribeServiceTranscriptionJobsApi XAmzTarget { get; init; }
}
