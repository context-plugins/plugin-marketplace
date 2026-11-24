using AmazonLex.Models;

namespace AmazonLex.Requests.Bots;

/// <summary>
/// The inputs of the ListIntentPaths operation.
/// </summary>
public sealed record ListIntentPathsOperationRequest
{
    public required string BotId { get; init; }

    public ListIntentPathsRequest? Body { get; init; }
}
