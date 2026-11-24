using AmazonTranscribe.Models.Enums;

namespace AmazonTranscribe.Requests.TranscriptionJobs;

/// <summary>
/// The inputs of the GetTranscriptionJob operation.
/// </summary>
public sealed record GetTranscriptionJobOperationRequest
{
    public required XAmzTarget1AmazonTranscribeServiceTranscriptionJobsApi XAmzTarget { get; init; }
}
