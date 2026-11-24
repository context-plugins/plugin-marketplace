using AmazonTranscribe.Models.Enums;

namespace AmazonTranscribe.Requests.MedicalVocabulary;

/// <summary>
/// The inputs of the DeleteMedicalVocabulary operation.
/// </summary>
public sealed record DeleteMedicalVocabularyOperationRequest
{
    public required XAmzTarget1AmazonTranscribeServiceMedicalVocabularyApi XAmzTarget { get; init; }
}
