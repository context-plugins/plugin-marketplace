using AmazonLex.Models;

namespace AmazonLex.Requests.Channels;

/// <summary>
/// The inputs of the DeleteBotChannelAssociation operation.
/// </summary>
public sealed record DeleteBotChannelAssociationOperationRequest
{
    public required string BotName { get; init; }

    public required string BotAlias { get; init; }

    public required string Name { get; init; }

    public DeleteBotChannelAssociationRequest? Body { get; init; }
}
