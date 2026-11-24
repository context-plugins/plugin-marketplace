using AmazonLex.Models;

namespace AmazonLex.Requests.Bots;

/// <summary>
/// The inputs of the ListBotLocales operation.
/// </summary>
public sealed record ListBotLocalesOperationRequest
{
    public required string BotId { get; init; }

    public required string BotVersion { get; init; }

    public ListBotLocalesRequest? Body { get; init; }
}
