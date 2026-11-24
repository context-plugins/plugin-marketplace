namespace AmazonLex.Requests.Bots;

/// <summary>
/// The inputs of the DescribeBotLocale operation.
/// </summary>
public sealed record DescribeBotLocaleOperationRequest
{
    public required string BotId { get; init; }

    public required string BotVersion { get; init; }

    public required string LocaleId { get; init; }
}
