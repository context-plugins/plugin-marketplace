using AmazonLex.Models;

namespace AmazonLex.Requests.Bots;

/// <summary>
/// The inputs of the BatchDeleteCustomVocabularyItem operation.
/// </summary>
public sealed record BatchDeleteCustomVocabularyItemOperationRequest
{
    public required string BotId { get; init; }

    public required string BotVersion { get; init; }

    public required string LocaleId { get; init; }

    public BatchDeleteCustomVocabularyItemRequest? Body { get; init; }
}
