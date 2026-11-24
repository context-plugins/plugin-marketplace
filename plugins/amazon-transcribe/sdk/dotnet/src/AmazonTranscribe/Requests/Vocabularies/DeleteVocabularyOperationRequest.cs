using AmazonTranscribe.Models.Enums;

namespace AmazonTranscribe.Requests.Vocabularies;

/// <summary>
/// The inputs of the DeleteVocabulary operation.
/// </summary>
public sealed record DeleteVocabularyOperationRequest
{
    public required XAmzTarget1AmazonTranscribeServiceVocabulariesApi XAmzTarget { get; init; }
}
