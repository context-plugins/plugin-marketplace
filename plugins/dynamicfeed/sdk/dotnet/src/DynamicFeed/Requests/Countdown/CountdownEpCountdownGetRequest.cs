using DynamicFeed.Models.AnyOf;

namespace DynamicFeed.Requests.Countdown;

/// <summary>
/// The inputs of the CountdownEpCountdownGet operation.
/// </summary>
public sealed record CountdownEpCountdownGetRequest
{
    /// <summary>
    /// e.g. 'NYSE open' or 'next SpaceX launch'
    /// </summary>
    public string Event { get; init; } = "";

    public XApiKey? XApiKey { get; init; }

    public XRapidapiProxySecret? XRapidapiProxySecret { get; init; }

    public XRapidapiUser? XRapidapiUser { get; init; }
}
