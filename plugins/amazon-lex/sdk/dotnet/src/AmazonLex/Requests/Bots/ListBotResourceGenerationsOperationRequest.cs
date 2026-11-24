using AmazonLex.Models;

namespace AmazonLex.Requests.Bots;

/// <summary>
/// The inputs of the ListBotResourceGenerations operation.
/// </summary>
public sealed record ListBotResourceGenerationsOperationRequest
{
    public required string BotId { get; init; }

    public required string BotVersion { get; init; }

    public required string LocaleId { get; init; }

    public ListBotResourceGenerationsRequest? Body { get; init; }
}
