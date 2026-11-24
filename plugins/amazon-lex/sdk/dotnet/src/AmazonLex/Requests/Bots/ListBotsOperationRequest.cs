using AmazonLex.Models;

namespace AmazonLex.Requests.Bots;

/// <summary>
/// The inputs of the ListBots operation.
/// </summary>
public sealed record ListBotsOperationRequest
{
    public ListBotsRequest? Body { get; init; }
}
