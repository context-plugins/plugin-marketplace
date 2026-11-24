using AmazonLex.Models;

namespace AmazonLex.Requests.Bots;

/// <summary>
/// The inputs of the StartBotAnalyzer operation.
/// </summary>
public sealed record StartBotAnalyzerOperationRequest
{
    public required string BotId { get; init; }

    public StartBotAnalyzerRequest? Body { get; init; }
}
