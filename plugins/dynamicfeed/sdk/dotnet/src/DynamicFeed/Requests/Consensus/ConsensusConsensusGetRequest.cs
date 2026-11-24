using DynamicFeed.Core.Validation.Attributes;
using DynamicFeed.Models.AnyOf;

namespace DynamicFeed.Requests.Consensus;

/// <summary>
/// The inputs of the ConsensusConsensusGet operation.
/// </summary>
public sealed record ConsensusConsensusGetRequest
{
    /// <summary>
    /// exact symbol, e.g. BTC, ETH, SOL
    /// </summary>
    public Symbol? Symbol { get; init; }

    [Maximum(100)]
    public int Limit { get; init; } = 50;

    public XApiKey? XApiKey { get; init; }

    public XRapidapiProxySecret? XRapidapiProxySecret { get; init; }

    public XRapidapiUser? XRapidapiUser { get; init; }
}
