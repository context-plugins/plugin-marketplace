using Fillo.Models;
using Fillo.Models.Enums;

namespace Fillo.Requests.Integrations;

/// <summary>
/// The inputs of the SelectIntegrationConnection operation.
/// </summary>
public sealed record SelectIntegrationConnectionRequest
{
    /// <summary>
    /// notion, slack, hubspot, or discord.
    /// </summary>
    public required Provider1 Provider { get; init; }

    public required ApiV1ManageIntegrationsConnectionsRequest Body { get; init; }
}
