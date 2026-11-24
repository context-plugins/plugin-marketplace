using AmazonLex.Models;

namespace AmazonLex.Requests.Bots;

/// <summary>
/// The inputs of the BatchUpdateCustomVocabularyItem operation.
/// </summary>
public sealed record BatchUpdateCustomVocabularyItemOperationRequest
{
    public required string BotId { get; init; }

    public required string BotVersion { get; init; }

    public required string LocaleId { get; init; }

    public BatchUpdateCustomVocabularyItemRequest? Body { get; init; }
}
