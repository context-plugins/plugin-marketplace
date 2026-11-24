using AmazonLex.Models;

namespace AmazonLex.Requests.Bots;

/// <summary>
/// The inputs of the ListCustomVocabularyItems operation.
/// </summary>
public sealed record ListCustomVocabularyItemsOperationRequest
{
    public required string BotId { get; init; }

    public required string BotVersion { get; init; }

    public required string LocaleId { get; init; }

    public ListCustomVocabularyItemsRequest? Body { get; init; }
}
