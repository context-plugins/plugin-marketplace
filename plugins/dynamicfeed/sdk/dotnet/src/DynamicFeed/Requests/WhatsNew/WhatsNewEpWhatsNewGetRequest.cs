using DynamicFeed.Models.AnyOf;

namespace DynamicFeed.Requests.WhatsNew;

/// <summary>
/// The inputs of the WhatsNewEpWhatsNewGet operation.
/// </summary>
public sealed record WhatsNewEpWhatsNewGetRequest
{
    /// <summary>
    /// your knowledge cutoff if known, e.g. 2024-10 (optional)
    /// </summary>
    public string Cutoff { get; init; } = "";

    public XApiKey? XApiKey { get; init; }

    public XRapidapiProxySecret? XRapidapiProxySecret { get; init; }

    public XRapidapiUser? XRapidapiUser { get; init; }
}
