using DynamicFeed.Core.Validation.Attributes;
using DynamicFeed.Models.AnyOf;

namespace DynamicFeed.Requests.ServersApi;

/// <summary>
/// The inputs of the ServersServersGet operation.
/// </summary>
public sealed record ServersServersGetRequest
{
    /// <summary>
    /// match server name/description
    /// </summary>
    public Q? Q { get; init; }

    /// <summary>
    /// only servers with a hosted/remote endpoint
    /// </summary>
    public HasRemote? HasRemote { get; init; }

    /// <summary>
    /// minimum GitHub stars
    /// </summary>
    public MinStars? MinStars { get; init; }

    [Maximum(200)]
    public int Limit { get; init; } = 50;

    public XApiKey? XApiKey { get; init; }

    public XRapidapiProxySecret? XRapidapiProxySecret { get; init; }

    public XRapidapiUser? XRapidapiUser { get; init; }
}
