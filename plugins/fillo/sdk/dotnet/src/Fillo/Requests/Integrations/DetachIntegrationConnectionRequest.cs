using Fillo.Models.Enums;

namespace Fillo.Requests.Integrations;

/// <summary>
/// The inputs of the DetachIntegrationConnection operation.
/// </summary>
public sealed record DetachIntegrationConnectionRequest
{
    /// <summary>
    /// notion, slack, hubspot, or discord.
    /// </summary>
    public required Provider1 Provider { get; init; }
}
