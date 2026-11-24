using AmazonLex.Models;

namespace AmazonLex.Requests.Bots;

/// <summary>
/// The inputs of the CreateBotVersion operation.
/// </summary>
public sealed record CreateBotVersionOperationRequest
{
    public required string BotId { get; init; }

    public CreateBotVersionRequest? Body { get; init; }
}
