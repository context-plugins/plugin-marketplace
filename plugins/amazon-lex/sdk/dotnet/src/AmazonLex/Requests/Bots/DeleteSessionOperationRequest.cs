using AmazonLex.Models;

namespace AmazonLex.Requests.Bots;

/// <summary>
/// The inputs of the DeleteSession operation.
/// </summary>
public sealed record DeleteSessionOperationRequest
{
    public required string BotId { get; init; }

    public required string BotAliasId { get; init; }

    public required string LocaleId { get; init; }

    public required string SessionId { get; init; }

    public DeleteSessionRequest? Body { get; init; }
}
