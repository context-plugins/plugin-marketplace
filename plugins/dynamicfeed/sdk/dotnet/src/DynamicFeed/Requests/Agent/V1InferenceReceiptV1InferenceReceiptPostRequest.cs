using DynamicFeed.Models.AnyOf;

namespace DynamicFeed.Requests.Agent;

/// <summary>
/// The inputs of the V1InferenceReceiptV1InferenceReceiptPost operation.
/// </summary>
public sealed record V1InferenceReceiptV1InferenceReceiptPostRequest
{
    public XApiKey? XApiKey { get; init; }

    public XRapidapiProxySecret? XRapidapiProxySecret { get; init; }

    public XRapidapiUser? XRapidapiUser { get; init; }
}
