namespace AmazonLex.Requests.Bots;

/// <summary>
/// The inputs of the DescribeSlot operation.
/// </summary>
public sealed record DescribeSlotOperationRequest
{
    public required string BotId { get; init; }

    public required string BotVersion { get; init; }

    public required string LocaleId { get; init; }

    public required string IntentId { get; init; }

    public required string SlotId { get; init; }
}
