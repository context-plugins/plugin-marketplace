using AmazonTranscribe.Models.Enums;

namespace AmazonTranscribe.Requests.Vocabularies;

/// <summary>
/// The inputs of the CreateVocabulary operation.
/// </summary>
public sealed record CreateVocabularyOperationRequest
{
    public required XAmzTargetAmazonTranscribeServiceVocabulariesApi XAmzTarget { get; init; }
}
