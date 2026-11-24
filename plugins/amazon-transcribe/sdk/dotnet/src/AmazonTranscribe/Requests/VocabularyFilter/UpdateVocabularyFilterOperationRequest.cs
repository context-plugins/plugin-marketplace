using AmazonTranscribe.Models.Enums;

namespace AmazonTranscribe.Requests.VocabularyFilter;

/// <summary>
/// The inputs of the UpdateVocabularyFilter operation.
/// </summary>
public sealed record UpdateVocabularyFilterOperationRequest
{
    public required XAmzTarget4AmazonTranscribeServiceVocabularyFilterApi XAmzTarget { get; init; }
}
