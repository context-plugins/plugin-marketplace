using AmazonTranscribe.Models.Enums;

namespace AmazonTranscribe.Requests.MedicalVocabulary;

/// <summary>
/// The inputs of the CreateMedicalVocabulary operation.
/// </summary>
public sealed record CreateMedicalVocabularyOperationRequest
{
    public required XAmzTargetAmazonTranscribeServiceMedicalVocabularyApi XAmzTarget { get; init; }
}
