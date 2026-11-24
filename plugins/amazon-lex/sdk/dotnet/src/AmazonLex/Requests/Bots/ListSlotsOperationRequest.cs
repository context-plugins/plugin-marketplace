using AmazonLex.Models;

namespace AmazonLex.Requests.Bots;

/// <summary>
/// The inputs of the ListSlots operation.
/// </summary>
public sealed record ListSlotsOperationRequest
{
    public required string BotId { get; init; }

    public required string BotVersion { get; init; }

    public required string LocaleId { get; init; }

    public required string IntentId { get; init; }

    public ListSlotsRequest? Body { get; init; }
}
