using DynamicFeed.Core.Validation.Attributes;
using DynamicFeed.Models.AnyOf;

namespace DynamicFeed.Requests.Volcanoes;

/// <summary>
/// The inputs of the VolcanoesEpVolcanoesGet operation.
/// </summary>
public sealed record VolcanoesEpVolcanoesGetRequest
{
    /// <summary>
    /// 'elevated' (default — only active alerts) or 'all'
    /// </summary>
    public string Status { get; init; } = "elevated";

    [Maximum(200)]
    public int Limit { get; init; } = 50;

    public XApiKey? XApiKey { get; init; }

    public XRapidapiProxySecret? XRapidapiProxySecret { get; init; }

    public XRapidapiUser? XRapidapiUser { get; init; }
}
