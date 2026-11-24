using AmazonLex.Models;

namespace AmazonLex.Requests.Aliases;

/// <summary>
/// The inputs of the PutBotAlias operation.
/// </summary>
public sealed record PutBotAliasOperationRequest
{
    public required string BotName { get; init; }

    public required string Name { get; init; }

    public PutBotAliasRequest? Body { get; init; }
}
