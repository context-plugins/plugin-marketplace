using AmazonTranscribe.Models.Enums;

namespace AmazonTranscribe.Requests.VocabularyFilter;

/// <summary>
/// The inputs of the GetVocabularyFilter operation.
/// </summary>
public sealed record GetVocabularyFilterOperationRequest
{
    public required XAmzTarget2AmazonTranscribeServiceVocabularyFilterApi XAmzTarget { get; init; }
}
