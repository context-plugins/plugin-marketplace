namespace AmazonLex.Requests.Bots;

/// <summary>
/// The inputs of the DescribeBot operation.
/// </summary>
public sealed record DescribeBotOperationRequest
{
    public required string BotId { get; init; }
}
