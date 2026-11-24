using DynamicFeed.Core.Validation.Attributes;
using DynamicFeed.Models.AnyOf;

namespace DynamicFeed.Requests.Movers;

/// <summary>
/// The inputs of the MoversMoversGet operation.
/// </summary>
public sealed record MoversMoversGetRequest
{
    /// <summary>
    /// gainers | losers
    /// </summary>
    public string Direction { get; init; } = "gainers";

    /// <summary>
    /// crypto | stock | index | forex | commodity | metal
    /// </summary>
    public AssetClass? AssetClass { get; init; }

    [Maximum(100)]
    public int Limit { get; init; } = 15;

    public XApiKey? XApiKey { get; init; }

    public XRapidapiProxySecret? XRapidapiProxySecret { get; init; }

    public XRapidapiUser? XRapidapiUser { get; init; }
}
