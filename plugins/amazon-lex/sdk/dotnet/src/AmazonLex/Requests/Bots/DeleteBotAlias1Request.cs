using AmazonLex.Models;

namespace AmazonLex.Requests.Bots;

/// <summary>
/// The inputs of the DeleteBotAlias1 operation.
/// </summary>
public sealed record DeleteBotAlias1Request
{
    public required string BotName { get; init; }

    public required string Name { get; init; }

    public ModelsLexDeleteBotAliasRequest? Body { get; init; }
}
