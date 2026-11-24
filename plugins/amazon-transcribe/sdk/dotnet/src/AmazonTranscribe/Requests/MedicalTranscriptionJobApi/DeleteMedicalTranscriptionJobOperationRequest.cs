using AmazonTranscribe.Models.Enums;

namespace AmazonTranscribe.Requests.MedicalTranscriptionJobApi;

/// <summary>
/// The inputs of the DeleteMedicalTranscriptionJob operation.
/// </summary>
public sealed record DeleteMedicalTranscriptionJobOperationRequest
{
    public required XAmzTargetAmazonTranscribeServiceMedicalTranscriptionJobApi XAmzTarget { get; init; }
}
