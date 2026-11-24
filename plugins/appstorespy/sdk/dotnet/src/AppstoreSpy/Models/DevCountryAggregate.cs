using System.Text.Json.Serialization;
using AppstoreSpy.Core.Models;

namespace AppstoreSpy.Models;

public record DevCountryAggregate
{
    /// <summary>
    /// Country of the developer's registered address as disclosed on the store listing (ISO 3166-1 alpha-2). May differ from where the company actually operates.
    /// </summary>
    [JsonPropertyName("hq_country")]
    public required string HqCountry { get; init; }

    /// <summary>
    /// Number of developers with this HQ country
    /// </summary>
    [JsonPropertyName("developers")]
    public required int Developers { get; init; }

    /// <summary>
    /// Sum of published apps across those developers
    /// </summary>
    [JsonPropertyName("published_apps")]
    public required int PublishedApps { get; init; }

    /// <summary>
    /// Sum of monthly downloads estimates across those developers
    /// </summary>
    [JsonPropertyName("downloads")]
    public required int Downloads { get; init; }

    /// <summary>
    /// Sum of monthly revenue estimates across those developers, USD
    /// </summary>
    [JsonPropertyName("revenue")]
    public required int Revenue { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
