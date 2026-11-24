using AmazonTranscribe.Models.Enums;

namespace AmazonTranscribe.Requests.MedicalTranscriptionJobApi;

/// <summary>
/// The inputs of the GetMedicalTranscriptionJob operation.
/// </summary>
public sealed record GetMedicalTranscriptionJobOperationRequest
{
    public required XAmzTarget1AmazonTranscribeServiceMedicalTranscriptionJobApi XAmzTarget { get; init; }
}
