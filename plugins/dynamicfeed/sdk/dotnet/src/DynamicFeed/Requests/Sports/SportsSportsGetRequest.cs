using DynamicFeed.Core.Validation.Attributes;
using DynamicFeed.Models.AnyOf;

namespace DynamicFeed.Requests.Sports;

/// <summary>
/// The inputs of the SportsSportsGet operation.
/// </summary>
public sealed record SportsSportsGetRequest
{
    /// <summary>
    /// event/team/competition, e.g. '2026 FIFA World Cup'
    /// </summary>
    public string Topic { get; init; } = "2026 FIFA World Cup";

    /// <summary>
    /// attention window in days
    /// </summary>
    [Minimum(7)]
    [Maximum(90)]
    public int Days { get; init; } = 30;

    /// <summary>
    /// primary Wikipedia language edition (en, es, pt, fr, ...)
    /// </summary>
    public string Lang { get; init; } = "en";

    public XApiKey? XApiKey { get; init; }

    public XRapidapiProxySecret? XRapidapiProxySecret { get; init; }

    public XRapidapiUser? XRapidapiUser { get; init; }
}
