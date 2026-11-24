using AmazonTranscribe.Models.Enums;

namespace AmazonTranscribe.Requests.Vocabularies;

/// <summary>
/// The inputs of the ListVocabularies operation.
/// </summary>
public sealed record ListVocabulariesOperationRequest
{
    public required XAmzTarget3AmazonTranscribeServiceVocabulariesApi XAmzTarget { get; init; }
}
