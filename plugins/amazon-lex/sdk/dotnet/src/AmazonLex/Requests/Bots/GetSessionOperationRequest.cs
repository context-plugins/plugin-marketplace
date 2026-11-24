namespace AmazonLex.Requests.Bots;

/// <summary>
/// The inputs of the GetSession operation.
/// </summary>
public sealed record GetSessionOperationRequest
{
    public required string BotId { get; init; }

    public required string BotAliasId { get; init; }

    public required string LocaleId { get; init; }

    public required string SessionId { get; init; }
}
