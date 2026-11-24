using System.Collections.Generic;
using System.Text.Json.Serialization;
using AppstoreSpy.Core.Models;
using AppstoreSpy.Models.Enums;

namespace AppstoreSpy.Models;

public record SearchFilterDevIos
{
    /// <summary>
    /// One or more country codes. Country of the developer's registered address as disclosed on the store listing (ISO 3166-1 alpha-2). May differ from where the company actually operates.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("hq_country")]
    public IReadOnlyList<string>? HqCountry { get; init; }

    /// <summary>
    /// Dominant category type of the developer's apps
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("type")]
    public TypeEnum? Type { get; init; }

    /// <summary>
    /// Monthly revenue estimate range, USD
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("revenue")]
    public ValueRange? Revenue { get; init; }

    /// <summary>
    /// Monthly downloads estimate range
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("downloads")]
    public ValueRange? Downloads { get; init; }

    /// <summary>
    /// Total apps count range
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("total_apps")]
    public ValueRange? TotalApps { get; init; }

    /// <summary>
    /// One or more publisher ids. Unified cross-store publisher id; the same value appears on the iOS and Play developer accounts of one company. Null when no mapping is known.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("am_publisher_id")]
    public IReadOnlyList<string>? AmPublisherId { get; init; }

    /// <summary>
    /// One or more publisher ids. Store-specific publisher id from the download-estimates provider. Null when no mapping is known.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("st_publisher_id")]
    public IReadOnlyList<string>? StPublisherId { get; init; }

    /// <summary>
    /// Dominant category of the developer's apps
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("category")]
    public IosCategory? Category { get; init; }

    /// <summary>
    /// One or more exact App Store seller legal names. Matches accounts whose seller field contains any of the given values.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("seller_name")]
    public IReadOnlyList<string>? SellerName { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
