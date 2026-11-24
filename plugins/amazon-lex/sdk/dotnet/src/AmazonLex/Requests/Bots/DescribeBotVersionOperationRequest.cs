namespace AmazonLex.Requests.Bots;

/// <summary>
/// The inputs of the DescribeBotVersion operation.
/// </summary>
public sealed record DescribeBotVersionOperationRequest
{
    public required string BotId { get; init; }

    public required string BotVersion { get; init; }
}
