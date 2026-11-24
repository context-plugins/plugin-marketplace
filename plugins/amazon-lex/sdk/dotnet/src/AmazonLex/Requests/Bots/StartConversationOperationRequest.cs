using AmazonLex.Models;

namespace AmazonLex.Requests.Bots;

/// <summary>
/// The inputs of the StartConversation operation.
/// </summary>
public sealed record StartConversationOperationRequest
{
    public required string BotId { get; init; }

    public required string BotAliasId { get; init; }

    public required string LocaleId { get; init; }

    public required string SessionId { get; init; }

    public StartConversationRequest? Body { get; init; }
}
