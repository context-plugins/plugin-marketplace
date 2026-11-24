using AmazonLex.Models;

namespace AmazonLex.Requests.Bots;

/// <summary>
/// The inputs of the CreateSlot operation.
/// </summary>
public sealed record CreateSlotOperationRequest
{
    public required string BotId { get; init; }

    public required string BotVersion { get; init; }

    public required string LocaleId { get; init; }

    public required string IntentId { get; init; }

    public CreateSlotRequest? Body { get; init; }
}
