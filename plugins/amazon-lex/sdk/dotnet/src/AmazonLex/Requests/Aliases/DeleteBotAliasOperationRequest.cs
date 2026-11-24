using AmazonLex.Models;

namespace AmazonLex.Requests.Aliases;

/// <summary>
/// The inputs of the DeleteBotAlias operation.
/// </summary>
public sealed record DeleteBotAliasOperationRequest
{
    public required string BotName { get; init; }

    public required string Name { get; init; }

    public ModelsLexDeleteBotAliasRequest? Body { get; init; }
}
