using AmazonLex.Models;

namespace AmazonLex.Requests.Bots;

/// <summary>
/// The inputs of the StartBotResourceGeneration operation.
/// </summary>
public sealed record StartBotResourceGenerationOperationRequest
{
    public required string BotId { get; init; }

    public required string BotVersion { get; init; }

    public required string LocaleId { get; init; }

    public StartBotResourceGenerationRequest? Body { get; init; }
}
