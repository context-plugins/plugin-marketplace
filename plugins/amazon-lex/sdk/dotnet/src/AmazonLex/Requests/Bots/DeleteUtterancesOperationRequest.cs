using AmazonLex.Models;

namespace AmazonLex.Requests.Bots;

/// <summary>
/// The inputs of the DeleteUtterances operation.
/// </summary>
public sealed record DeleteUtterancesOperationRequest
{
    public required string BotId { get; init; }

    public DeleteUtterancesRequest? Body { get; init; }
}
