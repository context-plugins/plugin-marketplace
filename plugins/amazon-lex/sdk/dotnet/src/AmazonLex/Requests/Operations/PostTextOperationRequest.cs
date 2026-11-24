using AmazonLex.Models;

namespace AmazonLex.Requests.Operations;

/// <summary>
/// The inputs of the PostText operation.
/// </summary>
public sealed record PostTextOperationRequest
{
    public required string BotName { get; init; }

    public required string BotAlias { get; init; }

    public required string UserId { get; init; }

    public PostTextRequest? Body { get; init; }
}
