using Fillo.Models;

namespace Fillo.Requests.Integrations;

/// <summary>
/// The inputs of the DisconnectDiscordServer operation.
/// </summary>
public sealed record DisconnectDiscordServerRequest
{
    /// <summary>
    /// A connected Discord server (guild) id.
    /// </summary>
    public required string GuildId { get; init; }

    public required ConfirmTarget Body { get; init; }
}
