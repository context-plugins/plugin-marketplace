namespace AmazonLex.Requests.Channels;

/// <summary>
/// The inputs of the GetBotChannelAssociations operation.
/// </summary>
public sealed record GetBotChannelAssociationsOperationRequest
{
    public required string BotName { get; init; }

    public required string BotAlias { get; init; }
}
