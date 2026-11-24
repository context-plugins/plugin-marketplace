using Fillo.Models;

namespace Fillo.Requests.Integrations;

/// <summary>
/// The inputs of the RenameDiscordChannel operation.
/// </summary>
public sealed record RenameDiscordChannelRequest
{
    /// <summary>
    /// A Discord account id from the connections listing.
    /// </summary>
    public required string Id { get; init; }

    public required ApiV1ManageIntegrationsDiscordAccountsRequest Body { get; init; }
}
