using DynamicFeed.Core.Validation.Attributes;
using DynamicFeed.Models.AnyOf;

namespace DynamicFeed.Requests.Recalls;

/// <summary>
/// The inputs of the RecallsRecallsGet operation.
/// </summary>
public sealed record RecallsRecallsGetRequest
{
    /// <summary>
    /// match the product description (brand/product), or blank for latest
    /// </summary>
    public string Query { get; init; } = "";

    /// <summary>
    /// all | food | drug | device
    /// </summary>
    public string Category { get; init; } = "all";

    [Minimum(1)]
    [Maximum(50)]
    public int Limit { get; init; } = 20;

    public XApiKey? XApiKey { get; init; }

    public XRapidapiProxySecret? XRapidapiProxySecret { get; init; }

    public XRapidapiUser? XRapidapiUser { get; init; }
}
