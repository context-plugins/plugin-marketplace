using AmazonLex.Models;

namespace AmazonLex.Requests.Bots;

/// <summary>
/// The inputs of the CreateBotLocale operation.
/// </summary>
public sealed record CreateBotLocaleOperationRequest
{
    public required string BotId { get; init; }

    public required string BotVersion { get; init; }

    public CreateBotLocaleRequest? Body { get; init; }
}
