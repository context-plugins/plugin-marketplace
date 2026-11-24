using AmazonLex.Models;

namespace AmazonLex.Requests.Bots;

/// <summary>
/// The inputs of the BatchCreateCustomVocabularyItem operation.
/// </summary>
public sealed record BatchCreateCustomVocabularyItemOperationRequest
{
    public required string BotId { get; init; }

    public required string BotVersion { get; init; }

    public required string LocaleId { get; init; }

    public BatchCreateCustomVocabularyItemRequest? Body { get; init; }
}
