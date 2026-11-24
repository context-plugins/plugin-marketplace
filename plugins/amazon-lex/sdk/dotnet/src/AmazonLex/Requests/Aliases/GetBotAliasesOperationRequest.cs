namespace AmazonLex.Requests.Aliases;

/// <summary>
/// The inputs of the GetBotAliases operation.
/// </summary>
public sealed record GetBotAliasesOperationRequest
{
    public required string BotName { get; init; }
}
