namespace AmazonLex.Requests.Channels;

/// <summary>
/// The inputs of the GetBotChannelAssociation operation.
/// </summary>
public sealed record GetBotChannelAssociationOperationRequest
{
    public required string BotName { get; init; }

    public required string BotAlias { get; init; }

    public required string Name { get; init; }
}
