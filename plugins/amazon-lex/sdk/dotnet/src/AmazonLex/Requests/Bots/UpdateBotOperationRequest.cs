using AmazonLex.Models;

namespace AmazonLex.Requests.Bots;

/// <summary>
/// The inputs of the UpdateBot operation.
/// </summary>
public sealed record UpdateBotOperationRequest
{
    public required string BotId { get; init; }

    public UpdateBotRequest? Body { get; init; }
}
