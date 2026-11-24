using AmazonLex.Models;

namespace AmazonLex.Requests.Bots;

/// <summary>
/// The inputs of the DeleteSession1 operation.
/// </summary>
public sealed record DeleteSession1Request
{
    public required string BotName { get; init; }

    public required string BotAlias { get; init; }

    public required string UserId { get; init; }

    public RuntimeLexDeleteSessionRequest? Body { get; init; }
}
