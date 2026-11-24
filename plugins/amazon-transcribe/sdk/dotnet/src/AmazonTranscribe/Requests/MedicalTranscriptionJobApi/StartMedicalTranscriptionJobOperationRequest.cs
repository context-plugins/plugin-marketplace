using AmazonTranscribe.Models.Enums;

namespace AmazonTranscribe.Requests.MedicalTranscriptionJobApi;

/// <summary>
/// The inputs of the StartMedicalTranscriptionJob operation.
/// </summary>
public sealed record StartMedicalTranscriptionJobOperationRequest
{
    public required XAmzTarget3AmazonTranscribeServiceMedicalTranscriptionJobApi XAmzTarget { get; init; }
}
