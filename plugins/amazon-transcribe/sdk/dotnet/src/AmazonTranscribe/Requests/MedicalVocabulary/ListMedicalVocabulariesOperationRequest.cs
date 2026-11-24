using AmazonTranscribe.Models.Enums;

namespace AmazonTranscribe.Requests.MedicalVocabulary;

/// <summary>
/// The inputs of the ListMedicalVocabularies operation.
/// </summary>
public sealed record ListMedicalVocabulariesOperationRequest
{
    public required XAmzTarget3AmazonTranscribeServiceMedicalVocabularyApi XAmzTarget { get; init; }
}
