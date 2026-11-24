using AmazonTranscribe.Models.Enums;

namespace AmazonTranscribe.Requests.VocabularyFilter;

/// <summary>
/// The inputs of the DeleteVocabularyFilter operation.
/// </summary>
public sealed record DeleteVocabularyFilterOperationRequest
{
    public required XAmzTarget1AmazonTranscribeServiceVocabularyFilterApi XAmzTarget { get; init; }
}
