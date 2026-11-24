using AmazonLex.Models;

namespace AmazonLex.Requests.Bots;

/// <summary>
/// The inputs of the DeleteBotAlias2 operation.
/// </summary>
public sealed record DeleteBotAlias2Request
{
    public required string BotId { get; init; }

    public required string BotAliasId { get; init; }

    public DeleteBotAliasRequest? Body { get; init; }
}
