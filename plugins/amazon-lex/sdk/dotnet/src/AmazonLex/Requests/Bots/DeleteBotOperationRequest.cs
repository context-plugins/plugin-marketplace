using AmazonLex.Models;

namespace AmazonLex.Requests.Bots;

/// <summary>
/// The inputs of the DeleteBot operation.
/// </summary>
public sealed record DeleteBotOperationRequest
{
    public required string BotId { get; init; }

    public DeleteBotRequest? Body { get; init; }
}
