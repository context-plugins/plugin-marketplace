using AmazonTranscribe.Models.Enums;

namespace AmazonTranscribe.Requests.Vocabularies;

/// <summary>
/// The inputs of the UpdateVocabulary operation.
/// </summary>
public sealed record UpdateVocabularyOperationRequest
{
    public required XAmzTarget4AmazonTranscribeServiceVocabulariesApi XAmzTarget { get; init; }
}
