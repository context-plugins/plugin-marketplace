using AmazonLex.Models;

namespace AmazonLex.Requests.Bots;

/// <summary>
/// The inputs of the UpdateIntent operation.
/// </summary>
public sealed record UpdateIntentOperationRequest
{
    public required string BotId { get; init; }

    public required string BotVersion { get; init; }

    public required string LocaleId { get; init; }

    public required string IntentId { get; init; }

    public UpdateIntentRequest? Body { get; init; }
}
