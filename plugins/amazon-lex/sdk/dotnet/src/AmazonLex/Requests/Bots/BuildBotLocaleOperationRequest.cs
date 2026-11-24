using AmazonLex.Models;

namespace AmazonLex.Requests.Bots;

/// <summary>
/// The inputs of the BuildBotLocale operation.
/// </summary>
public sealed record BuildBotLocaleOperationRequest
{
    public required string BotId { get; init; }

    public required string BotVersion { get; init; }

    public required string LocaleId { get; init; }

    public BuildBotLocaleRequest? Body { get; init; }
}
