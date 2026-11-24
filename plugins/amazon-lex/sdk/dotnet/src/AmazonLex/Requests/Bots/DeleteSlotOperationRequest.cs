using AmazonLex.Models;

namespace AmazonLex.Requests.Bots;

/// <summary>
/// The inputs of the DeleteSlot operation.
/// </summary>
public sealed record DeleteSlotOperationRequest
{
    public required string BotId { get; init; }

    public required string BotVersion { get; init; }

    public required string LocaleId { get; init; }

    public required string IntentId { get; init; }

    public required string SlotId { get; init; }

    public DeleteSlotRequest? Body { get; init; }
}
