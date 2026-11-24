using DynamicFeed.Core.Validation.Attributes;
using DynamicFeed.Models.AnyOf;

namespace DynamicFeed.Requests.Sanctions;

/// <summary>
/// The inputs of the SanctionsScreenSanctionsGet operation.
/// </summary>
public sealed record SanctionsScreenSanctionsGetRequest
{
    /// <summary>
    /// name to screen against the US OFAC SDN + UK Sanctions List
    /// </summary>
    public string Name { get; init; } = "";

    /// <summary>
    /// optional program/regime filter, e.g. IRAN, CUBA, or a UK regime
    /// </summary>
    public string Program { get; init; } = "";

    [Maximum(100)]
    public int Limit { get; init; } = 25;

    public XApiKey? XApiKey { get; init; }

    public XRapidapiProxySecret? XRapidapiProxySecret { get; init; }

    public XRapidapiUser? XRapidapiUser { get; init; }
}
