using AmazonLex.Models;

namespace AmazonLex.Requests.Bots;

/// <summary>
/// The inputs of the ListBotVersions operation.
/// </summary>
public sealed record ListBotVersionsOperationRequest
{
    public required string BotId { get; init; }

    public ListBotVersionsRequest? Body { get; init; }
}
