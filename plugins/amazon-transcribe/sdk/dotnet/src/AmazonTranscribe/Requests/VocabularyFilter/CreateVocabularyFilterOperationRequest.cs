using AmazonTranscribe.Models.Enums;

namespace AmazonTranscribe.Requests.VocabularyFilter;

/// <summary>
/// The inputs of the CreateVocabularyFilter operation.
/// </summary>
public sealed record CreateVocabularyFilterOperationRequest
{
    public required XAmzTargetAmazonTranscribeServiceVocabularyFilterApi XAmzTarget { get; init; }
}
