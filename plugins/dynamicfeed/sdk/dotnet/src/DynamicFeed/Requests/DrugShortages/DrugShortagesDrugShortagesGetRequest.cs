using DynamicFeed.Core.Validation.Attributes;
using DynamicFeed.Models.AnyOf;

namespace DynamicFeed.Requests.DrugShortages;

/// <summary>
/// The inputs of the DrugShortagesDrugShortagesGet operation.
/// </summary>
public sealed record DrugShortagesDrugShortagesGetRequest
{
    /// <summary>
    /// drug / generic name, e.g. amoxicillin (optional)
    /// </summary>
    public string Query { get; init; } = "";

    [Maximum(100)]
    public int Limit { get; init; } = 25;

    public XApiKey? XApiKey { get; init; }

    public XRapidapiProxySecret? XRapidapiProxySecret { get; init; }

    public XRapidapiUser? XRapidapiUser { get; init; }
}
