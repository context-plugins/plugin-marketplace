using AmazonLex.Models;

namespace AmazonLex.Requests.Bots;

/// <summary>
/// The inputs of the PutSession1 operation.
/// </summary>
public sealed record PutSession1Request
{
    public required string BotName { get; init; }

    public required string BotAlias { get; init; }

    public required string UserId { get; init; }

    public RuntimeLexPutSessionRequest? Body { get; init; }
}
