using AmazonTranscribe.Models.Enums;

namespace AmazonTranscribe.Requests.MedicalVocabulary;

/// <summary>
/// The inputs of the UpdateMedicalVocabulary operation.
/// </summary>
public sealed record UpdateMedicalVocabularyOperationRequest
{
    public required XAmzTarget4AmazonTranscribeServiceMedicalVocabularyApi XAmzTarget { get; init; }
}
