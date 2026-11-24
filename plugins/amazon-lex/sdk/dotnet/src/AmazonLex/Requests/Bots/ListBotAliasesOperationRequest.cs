using AmazonLex.Models;

namespace AmazonLex.Requests.Bots;

/// <summary>
/// The inputs of the ListBotAliases operation.
/// </summary>
public sealed record ListBotAliasesOperationRequest
{
    public required string BotId { get; init; }

    public ListBotAliasesRequest? Body { get; init; }
}
