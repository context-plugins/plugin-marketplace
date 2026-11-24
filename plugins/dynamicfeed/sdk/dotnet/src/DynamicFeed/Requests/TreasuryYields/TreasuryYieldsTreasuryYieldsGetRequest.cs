using DynamicFeed.Models.AnyOf;

namespace DynamicFeed.Requests.TreasuryYields;

/// <summary>
/// The inputs of the TreasuryYieldsTreasuryYieldsGet operation.
/// </summary>
public sealed record TreasuryYieldsTreasuryYieldsGetRequest
{
    public XApiKey? XApiKey { get; init; }

    public XRapidapiProxySecret? XRapidapiProxySecret { get; init; }

    public XRapidapiUser? XRapidapiUser { get; init; }
}
