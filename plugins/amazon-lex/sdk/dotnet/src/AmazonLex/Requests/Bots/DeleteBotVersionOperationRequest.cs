using AmazonLex.Models;

namespace AmazonLex.Requests.Bots;

/// <summary>
/// The inputs of the DeleteBotVersion operation.
/// </summary>
public sealed record DeleteBotVersionOperationRequest
{
    public required string BotId { get; init; }

    public required string BotVersion { get; init; }

    public DeleteBotVersionRequest? Body { get; init; }
}
