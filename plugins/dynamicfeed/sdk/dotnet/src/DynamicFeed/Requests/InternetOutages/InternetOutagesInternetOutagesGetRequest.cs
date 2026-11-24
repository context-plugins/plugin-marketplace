using DynamicFeed.Models.AnyOf;

namespace DynamicFeed.Requests.InternetOutages;

/// <summary>
/// The inputs of the InternetOutagesInternetOutagesGet operation.
/// </summary>
public sealed record InternetOutagesInternetOutagesGetRequest
{
    /// <summary>
    /// an ASN (AS3215), an IP (8.8.8.8), or a prefix (193.0.0.0/22)
    /// </summary>
    public string Resource { get; init; } = "";

    public XApiKey? XApiKey { get; init; }

    public XRapidapiProxySecret? XRapidapiProxySecret { get; init; }

    public XRapidapiUser? XRapidapiUser { get; init; }
}
