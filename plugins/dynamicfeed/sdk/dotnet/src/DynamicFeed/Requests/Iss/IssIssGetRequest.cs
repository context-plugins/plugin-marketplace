using DynamicFeed.Models.AnyOf;

namespace DynamicFeed.Requests.Iss;

/// <summary>
/// The inputs of the IssIssGet operation.
/// </summary>
public sealed record IssIssGetRequest
{
    public XApiKey? XApiKey { get; init; }

    public XRapidapiProxySecret? XRapidapiProxySecret { get; init; }

    public XRapidapiUser? XRapidapiUser { get; init; }
}
