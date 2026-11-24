using AmazonLex.Models;

namespace AmazonLex.Requests.Bots;

/// <summary>
/// The inputs of the ListSlotTypes operation.
/// </summary>
public sealed record ListSlotTypesOperationRequest
{
    public required string BotId { get; init; }

    public required string BotVersion { get; init; }

    public required string LocaleId { get; init; }

    public ListSlotTypesRequest? Body { get; init; }
}
