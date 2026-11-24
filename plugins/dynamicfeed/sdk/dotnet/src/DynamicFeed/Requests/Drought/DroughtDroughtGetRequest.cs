using DynamicFeed.Core.Validation.Attributes;
using DynamicFeed.Models.AnyOf;

namespace DynamicFeed.Requests.Drought;

/// <summary>
/// The inputs of the DroughtDroughtGet operation.
/// </summary>
public sealed record DroughtDroughtGetRequest
{
    /// <summary>
    /// 'total' (US national) or a state FIPS code
    /// </summary>
    public string Area { get; init; } = "total";

    [Minimum(1)]
    [Maximum(52)]
    public int Weeks { get; init; } = 6;

    public XApiKey? XApiKey { get; init; }

    public XRapidapiProxySecret? XRapidapiProxySecret { get; init; }

    public XRapidapiUser? XRapidapiUser { get; init; }
}
