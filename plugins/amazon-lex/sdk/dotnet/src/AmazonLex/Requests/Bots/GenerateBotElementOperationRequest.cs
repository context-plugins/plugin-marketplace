using AmazonLex.Models;

namespace AmazonLex.Requests.Bots;

/// <summary>
/// The inputs of the GenerateBotElement operation.
/// </summary>
public sealed record GenerateBotElementOperationRequest
{
    public required string BotId { get; init; }

    public required string BotVersion { get; init; }

    public required string LocaleId { get; init; }

    public GenerateBotElementRequest? Body { get; init; }
}
