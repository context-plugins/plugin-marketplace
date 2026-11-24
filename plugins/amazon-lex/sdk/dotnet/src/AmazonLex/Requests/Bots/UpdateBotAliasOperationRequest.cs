using AmazonLex.Models;

namespace AmazonLex.Requests.Bots;

/// <summary>
/// The inputs of the UpdateBotAlias operation.
/// </summary>
public sealed record UpdateBotAliasOperationRequest
{
    public required string BotId { get; init; }

    public required string BotAliasId { get; init; }

    public UpdateBotAliasRequest? Body { get; init; }
}
