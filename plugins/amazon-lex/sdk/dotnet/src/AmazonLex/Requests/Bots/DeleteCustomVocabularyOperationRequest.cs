using AmazonLex.Models;

namespace AmazonLex.Requests.Bots;

/// <summary>
/// The inputs of the DeleteCustomVocabulary operation.
/// </summary>
public sealed record DeleteCustomVocabularyOperationRequest
{
    public required string BotId { get; init; }

    public required string BotVersion { get; init; }

    public required string LocaleId { get; init; }

    public DeleteCustomVocabularyRequest? Body { get; init; }
}
