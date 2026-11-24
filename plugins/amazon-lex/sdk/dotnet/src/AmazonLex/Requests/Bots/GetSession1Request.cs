namespace AmazonLex.Requests.Bots;

/// <summary>
/// The inputs of the GetSession1 operation.
/// </summary>
public sealed record GetSession1Request
{
    public required string BotName { get; init; }

    public required string BotAlias { get; init; }

    public required string UserId { get; init; }
}
