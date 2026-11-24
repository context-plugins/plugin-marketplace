using AmazonLex.Models;

namespace AmazonLex.Requests.Bots;

/// <summary>
/// The inputs of the SearchAssociatedTranscripts operation.
/// </summary>
public sealed record SearchAssociatedTranscriptsOperationRequest
{
    public required string BotId { get; init; }

    public required string BotVersion { get; init; }

    public required string LocaleId { get; init; }

    public required string BotRecommendationId { get; init; }

    public SearchAssociatedTranscriptsRequest? Body { get; init; }
}
