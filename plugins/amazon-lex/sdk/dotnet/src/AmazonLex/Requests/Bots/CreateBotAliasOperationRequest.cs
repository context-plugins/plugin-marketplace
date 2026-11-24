using AmazonLex.Models;

namespace AmazonLex.Requests.Bots;

/// <summary>
/// The inputs of the CreateBotAlias operation.
/// </summary>
public sealed record CreateBotAliasOperationRequest
{
    public required string BotId { get; init; }

    public CreateBotAliasRequest? Body { get; init; }
}
