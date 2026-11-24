using AmazonTranscribe.Models.Enums;

namespace AmazonTranscribe.Requests.MedicalTranscriptionJobApi;

/// <summary>
/// The inputs of the ListMedicalTranscriptionJobs operation.
/// </summary>
public sealed record ListMedicalTranscriptionJobsOperationRequest
{
    public required XAmzTarget2AmazonTranscribeServiceMedicalTranscriptionJobApi XAmzTarget { get; init; }
}
