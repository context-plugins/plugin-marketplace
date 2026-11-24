using AmazonTranscribe.Models.Enums;

namespace AmazonTranscribe.Requests.VocabularyFilter;

/// <summary>
/// The inputs of the ListVocabularyFilters operation.
/// </summary>
public sealed record ListVocabularyFiltersOperationRequest
{
    public required XAmzTarget3AmazonTranscribeServiceVocabularyFilterApi XAmzTarget { get; init; }
}
