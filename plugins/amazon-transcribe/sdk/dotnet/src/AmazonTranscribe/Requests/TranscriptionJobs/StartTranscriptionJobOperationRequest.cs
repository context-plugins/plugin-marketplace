using AmazonTranscribe.Models.Enums;

namespace AmazonTranscribe.Requests.TranscriptionJobs;

/// <summary>
/// The inputs of the StartTranscriptionJob operation.
/// </summary>
public sealed record StartTranscriptionJobOperationRequest
{
    public required XAmzTarget3AmazonTranscribeServiceTranscriptionJobsApi XAmzTarget { get; init; }
}
