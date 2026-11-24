using AmazonLex.Models;

namespace AmazonLex.Requests.Bots;

/// <summary>
/// The inputs of the UpdateBotLocale operation.
/// </summary>
public sealed record UpdateBotLocaleOperationRequest
{
    public required string BotId { get; init; }

    public required string BotVersion { get; init; }

    public required string LocaleId { get; init; }

    public UpdateBotLocaleRequest? Body { get; init; }
}
