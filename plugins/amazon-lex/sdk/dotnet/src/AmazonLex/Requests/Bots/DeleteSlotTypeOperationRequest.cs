using AmazonLex.Models;

namespace AmazonLex.Requests.Bots;

/// <summary>
/// The inputs of the DeleteSlotType operation.
/// </summary>
public sealed record DeleteSlotTypeOperationRequest
{
    public required string BotId { get; init; }

    public required string BotVersion { get; init; }

    public required string LocaleId { get; init; }

    public required string SlotTypeId { get; init; }

    public DeleteSlotTypeRequest? Body { get; init; }
}
