using AmazonLex.Models;

namespace AmazonLex.Requests.Bots;

/// <summary>
/// The inputs of the CreateIntent operation.
/// </summary>
public sealed record CreateIntentOperationRequest
{
    public required string BotId { get; init; }

    public required string BotVersion { get; init; }

    public required string LocaleId { get; init; }

    public CreateIntentRequest? Body { get; init; }
}
