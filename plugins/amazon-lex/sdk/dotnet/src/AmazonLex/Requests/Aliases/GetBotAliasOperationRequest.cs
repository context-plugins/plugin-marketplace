namespace AmazonLex.Requests.Aliases;

/// <summary>
/// The inputs of the GetBotAlias operation.
/// </summary>
public sealed record GetBotAliasOperationRequest
{
    public required string BotName { get; init; }

    public required string Name { get; init; }
}
