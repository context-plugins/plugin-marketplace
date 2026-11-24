namespace AmazonLex.Requests.Bots;

/// <summary>
/// The inputs of the DescribeCustomVocabularyMetadata operation.
/// </summary>
public sealed record DescribeCustomVocabularyMetadataOperationRequest
{
    public required string BotId { get; init; }

    public required string BotVersion { get; init; }

    public required string LocaleId { get; init; }
}
