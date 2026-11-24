using DynamicFeed.Core.Validation.Attributes;
using DynamicFeed.Models.AnyOf;

namespace DynamicFeed.Requests.Launches;

/// <summary>
/// The inputs of the LaunchesLaunchesGet operation.
/// </summary>
public sealed record LaunchesLaunchesGetRequest
{
    /// <summary>
    /// filter by provider, e.g. SpaceX
    /// </summary>
    public Provider? Provider { get; init; }

    [Maximum(30)]
    public int Limit { get; init; } = 8;

    public XApiKey? XApiKey { get; init; }

    public XRapidapiProxySecret? XRapidapiProxySecret { get; init; }

    public XRapidapiUser? XRapidapiUser { get; init; }
}
