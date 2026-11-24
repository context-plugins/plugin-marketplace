namespace AmazonLex.Requests.Bots;

/// <summary>
/// The inputs of the DescribeBotAlias operation.
/// </summary>
public sealed record DescribeBotAliasOperationRequest
{
    public required string BotId { get; init; }

    public required string BotAliasId { get; init; }
}
