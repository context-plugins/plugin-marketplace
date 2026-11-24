using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;
using AppstoreSpy.Core.Models;
using AppstoreSpy.Models.Enums;

namespace AppstoreSpy.Models;

public record SearchFilterIos
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("id")]
    public IReadOnlyList<string>? Id { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("name")]
    public string? Name { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("published")]
    public bool? Published { get; init; }

    /// <summary>
    /// An enumeration.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("category_type")]
    public TypeEnum? CategoryType { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("revenue_month")]
    public ValueRange? RevenueMonth { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("downloads_month")]
    public ValueRange? DownloadsMonth { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("release_date")]
    public DateRange? ReleaseDate { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("update_date")]
    public DateRange? UpdateDate { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("rating_count")]
    public ValueRange? RatingCount { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("developer")]
    public string? Developer { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("developer_id")]
    public string? DeveloperId { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("editorial")]
    public bool? Editorial { get; init; }

    /// <summary>
    /// In app purchases
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("iap")]
    public bool? Iap { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("active_countries")]
    public IReadOnlyList<string>? ActiveCountries { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("description_full")]
    public string? DescriptionFull { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("description_short")]
    public string? DescriptionShort { get; init; }

    /// <summary>
    /// Updates in app
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("whatsnew")]
    public string? Whatsnew { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("hosts")]
    public string? Hosts { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("with_ads")]
    public bool? WithAds { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("advertised")]
    public bool? Advertised { get; init; }

    /// <summary>
    /// Collection ID
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("collection_id")]
    public string? CollectionId { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("discovered")]
    public IReadOnlyList<DateTimeOffset>? Discovered { get; init; }

    /// <summary>
    /// Website
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("website")]
    public string? Website { get; init; }

    /// <summary>
    /// App bundle ID(s); accepts a single string or a list
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("bundle")]
    public IReadOnlyList<string>? Bundle { get; init; }

    /// <summary>
    /// Whether the app has been transferred to a new developer at least once
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("transferred")]
    public bool? Transferred { get; init; }

    /// <summary>
    /// Date range (gte/lte) of the last developer transfer
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("transfer_date")]
    public DateRange? TransferDate { get; init; }

    /// <summary>
    /// Date range (gte/lte) of app removal from the store; matches removed (unavailable) apps
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("removal_date")]
    public DateRange? RemovalDate { get; init; }

    /// <summary>
    /// An enumeration.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("category")]
    public IosCategory? Category { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("chart_filter")]
    public ChartFilterIos? ChartFilter { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("developer_name")]
    public string? DeveloperName { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("rating_avg")]
    public ValueRange? RatingAvg { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("review_count")]
    public ValueRange? ReviewCount { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("copyright")]
    public string? Copyright { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("seller")]
    public string? Seller { get; init; }

    /// <summary>
    /// Similars apps
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("similar_apps")]
    public string? SimilarApps { get; init; }

    /// <summary>
    /// Apps with app in similar`s lists
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("reverse_similar_apps")]
    public string? ReverseSimilarApps { get; init; }

    /// <summary>
    /// Previous developer ID before transfer
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("previous_developer_id")]
    public string? PreviousDeveloperId { get; init; }

    /// <summary>
    /// Previous developer name before transfer
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("previous_developer_name")]
    public string? PreviousDeveloperName { get; init; }

    /// <summary>
    /// Pre-order apps only (True); matches apps whose release date is still in the future
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("pre_order")]
    public bool? PreOrder { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
