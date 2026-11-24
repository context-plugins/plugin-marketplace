using AmazonLex.Models;

namespace AmazonLex.Requests.Bots;

/// <summary>
/// The inputs of the DeleteUtterances1 operation.
/// </summary>
public sealed record DeleteUtterances1Request
{
    public required string BotName { get; init; }

    public required string UserId { get; init; }

    public ModelsLexDeleteUtterancesRequest? Body { get; init; }
}
