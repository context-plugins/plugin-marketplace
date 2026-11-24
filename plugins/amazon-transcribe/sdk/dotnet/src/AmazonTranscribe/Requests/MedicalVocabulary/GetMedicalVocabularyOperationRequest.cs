using AmazonTranscribe.Models.Enums;

namespace AmazonTranscribe.Requests.MedicalVocabulary;

/// <summary>
/// The inputs of the GetMedicalVocabulary operation.
/// </summary>
public sealed record GetMedicalVocabularyOperationRequest
{
    public required XAmzTarget2AmazonTranscribeServiceMedicalVocabularyApi XAmzTarget { get; init; }
}
