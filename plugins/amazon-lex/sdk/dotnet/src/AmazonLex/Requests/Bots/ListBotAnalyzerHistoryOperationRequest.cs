using AmazonLex.Models;

namespace AmazonLex.Requests.Bots;

/// <summary>
/// The inputs of the ListBotAnalyzerHistory operation.
/// </summary>
public sealed record ListBotAnalyzerHistoryOperationRequest
{
    public required string BotId { get; init; }

    public ListBotAnalyzerHistoryRequest? Body { get; init; }
}
