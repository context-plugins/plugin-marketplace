namespace AmazonLex.Requests.Bots;

/// <summary>
/// The inputs of the DescribeBotResourceGeneration operation.
/// </summary>
public sealed record DescribeBotResourceGenerationOperationRequest
{
    public required string BotId { get; init; }

    public required string BotVersion { get; init; }

    public required string LocaleId { get; init; }

    public required string GenerationId { get; init; }
}
