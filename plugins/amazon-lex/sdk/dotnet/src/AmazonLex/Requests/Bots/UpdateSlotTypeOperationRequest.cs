using AmazonLex.Models;

namespace AmazonLex.Requests.Bots;

/// <summary>
/// The inputs of the UpdateSlotType operation.
/// </summary>
public sealed record UpdateSlotTypeOperationRequest
{
    public required string BotId { get; init; }

    public required string BotVersion { get; init; }

    public required string LocaleId { get; init; }

    public required string SlotTypeId { get; init; }

    public UpdateSlotTypeRequest? Body { get; init; }
}
