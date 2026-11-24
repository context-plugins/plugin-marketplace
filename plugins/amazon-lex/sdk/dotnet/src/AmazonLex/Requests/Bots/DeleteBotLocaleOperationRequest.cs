using AmazonLex.Models;

namespace AmazonLex.Requests.Bots;

/// <summary>
/// The inputs of the DeleteBotLocale operation.
/// </summary>
public sealed record DeleteBotLocaleOperationRequest
{
    public required string BotId { get; init; }

    public required string BotVersion { get; init; }

    public required string LocaleId { get; init; }

    public DeleteBotLocaleRequest? Body { get; init; }
}
