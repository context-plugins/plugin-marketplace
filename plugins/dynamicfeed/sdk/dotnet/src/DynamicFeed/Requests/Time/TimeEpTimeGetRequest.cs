using DynamicFeed.Models.AnyOf;

namespace DynamicFeed.Requests.Time;

/// <summary>
/// The inputs of the TimeEpTimeGet operation.
/// </summary>
public sealed record TimeEpTimeGetRequest
{
    /// <summary>
    /// IANA timezone, e.g. America/New_York (default UTC)
    /// </summary>
    public string Tz { get; init; } = "UTC";

    public XApiKey? XApiKey { get; init; }

    public XRapidapiProxySecret? XRapidapiProxySecret { get; init; }

    public XRapidapiUser? XRapidapiUser { get; init; }
}
