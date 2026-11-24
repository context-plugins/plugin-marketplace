namespace AmazonLex.Requests.Bots;

/// <summary>
/// The inputs of the DescribeSlotType operation.
/// </summary>
public sealed record DescribeSlotTypeOperationRequest
{
    public required string BotId { get; init; }

    public required string BotVersion { get; init; }

    public required string LocaleId { get; init; }

    public required string SlotTypeId { get; init; }
}
