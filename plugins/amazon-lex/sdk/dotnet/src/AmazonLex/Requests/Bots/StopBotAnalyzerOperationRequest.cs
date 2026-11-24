using AmazonLex.Models;

namespace AmazonLex.Requests.Bots;

/// <summary>
/// The inputs of the StopBotAnalyzer operation.
/// </summary>
public sealed record StopBotAnalyzerOperationRequest
{
    public required string BotId { get; init; }

    public required string BotAnalyzerRequestId { get; init; }

    public StopBotAnalyzerRequest? Body { get; init; }
}
