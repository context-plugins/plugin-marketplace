using AmazonLex.Models;

namespace AmazonLex.Requests.Operations;

/// <summary>
/// The inputs of the PostContent operation.
/// </summary>
public sealed record PostContentOperationRequest
{
    public required string BotName { get; init; }

    public required string BotAlias { get; init; }

    public required string UserId { get; init; }

    public PostContentRequest? Body { get; init; }
}
