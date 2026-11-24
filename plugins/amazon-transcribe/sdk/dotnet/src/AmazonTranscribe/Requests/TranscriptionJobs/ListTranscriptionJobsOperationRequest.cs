using AmazonTranscribe.Models.Enums;

namespace AmazonTranscribe.Requests.TranscriptionJobs;

/// <summary>
/// The inputs of the ListTranscriptionJobs operation.
/// </summary>
public sealed record ListTranscriptionJobsOperationRequest
{
    public required XAmzTarget2AmazonTranscribeServiceTranscriptionJobsApi XAmzTarget { get; init; }
}
