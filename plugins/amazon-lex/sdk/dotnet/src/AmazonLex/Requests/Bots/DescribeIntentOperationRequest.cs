namespace AmazonLex.Requests.Bots;

/// <summary>
/// The inputs of the DescribeIntent operation.
/// </summary>
public sealed record DescribeIntentOperationRequest
{
    public required string BotId { get; init; }

    public required string BotVersion { get; init; }

    public required string LocaleId { get; init; }

    public required string IntentId { get; init; }
}
