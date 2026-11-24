using AmazonTranscribe.Models.Enums;

namespace AmazonTranscribe.Requests.Vocabularies;

/// <summary>
/// The inputs of the GetVocabulary operation.
/// </summary>
public sealed record GetVocabularyOperationRequest
{
    public required XAmzTarget2AmazonTranscribeServiceVocabulariesApi XAmzTarget { get; init; }
}
