using AmazonTranscribe.Models.Enums;

namespace AmazonTranscribe.Requests.MedicalScribeJobApi;

/// <summary>
/// The inputs of the ListMedicalScribeJobs operation.
/// </summary>
public sealed record ListMedicalScribeJobsOperationRequest
{
    public required XAmzTarget2AmazonTranscribeServiceMedicalScribeJobApi XAmzTarget { get; init; }
}
