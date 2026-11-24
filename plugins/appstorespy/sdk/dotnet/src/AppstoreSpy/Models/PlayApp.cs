using System.Collections.Generic;
using System.Text.Json.Serialization;
using AppstoreSpy.Core.Models;

namespace AppstoreSpy.Models;

public record PlayApp
{
    /// <summary>
    /// The app package name
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("id")]
    public string? Id { get; init; }

    /// <summary>
    /// Bundle(the same as id)
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("bundle")]
    public string? Bundle { get; init; }

    /// <summary>
    /// Published
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("published")]
    public bool? Published { get; init; }

    /// <summary>
    /// Available in countries
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("available_in")]
    public IReadOnlyList<object>? AvailableIn { get; init; }

    /// <summary>
    /// Not available in countries
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("available_not")]
    public IReadOnlyList<object>? AvailableNot { get; init; }

    /// <summary>
    /// Country for which specific fields returned
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("country")]
    public string? Country { get; init; }

    /// <summary>
    /// The language in which the app metadata is returned
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("lang")]
    public string? Lang { get; init; }

    /// <summary>
    /// Translations detected by AppstoreSpy
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("languages")]
    public IReadOnlyList<object>? Languages { get; init; }

    /// <summary>
    /// Category type: app or game
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("type")]
    public string? Type { get; init; }

    /// <summary>
    /// Category ID. Refer to the Google Play categories for more information
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("category")]
    public string? Category { get; init; }

    /// <summary>
    /// Name in the specified language
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("name")]
    public string? Name { get; init; }

    /// <summary>
    /// Short description in the specified language
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("short")]
    public string? Short { get; init; }

    /// <summary>
    /// Description in the specified language
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("description")]
    public string? Description { get; init; }

    /// <summary>
    /// Icon in the specified language
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("icon")]
    public string? Icon { get; init; }

    /// <summary>
    /// Screenshots in the specified language
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("screenshots")]
    public IReadOnlyList<string>? Screenshots { get; init; }

    /// <summary>
    /// Video trailer Youtube link in the specified language
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("trailer")]
    public string? Trailer { get; init; }

    /// <summary>
    /// Feature in the specified language
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("feature")]
    public string? Feature { get; init; }

    /// <summary>
    /// What's new in the specified language
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("whatsnew")]
    public string? Whatsnew { get; init; }

    /// <summary>
    /// Developer ID
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("developer_id")]
    public string? DeveloperId { get; init; }

    /// <summary>
    /// Developer name
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("developer_name")]
    public string? DeveloperName { get; init; }

    /// <summary>
    /// Contact email
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("emails")]
    public IReadOnlyList<string>? Emails { get; init; }

    /// <summary>
    /// Website
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("website")]
    public string? Website { get; init; }

    /// <summary>
    /// Privacy policy link
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("privacy_policy")]
    public string? PrivacyPolicy { get; init; }

    /// <summary>
    /// Link to Google Play
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("url")]
    public string? Url { get; init; }

    /// <summary>
    /// Editor's choice
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("editorial")]
    public bool? Editorial { get; init; }

    /// <summary>
    /// App offers in-app purchases
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("iap")]
    public bool? Iap { get; init; }

    /// <summary>
    /// App`s ads
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("ads")]
    public Creatives? Ads { get; init; }

    /// <summary>
    /// App is advertised in networks
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("advertised")]
    public bool? Advertised { get; init; }

    /// <summary>
    /// Installs checkpoint
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("installs")]
    public string? Installs { get; init; }

    /// <summary>
    /// Accurate installs value
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("installs_exact")]
    public int? InstallsExact { get; init; }

    /// <summary>
    /// Estimated daily installs
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("ipd")]
    public int? Ipd { get; init; }

    /// <summary>
    /// Total ratings
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("rating_count")]
    public int? RatingCount { get; init; }

    /// <summary>
    /// Rating value in the specified country
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("rating_value")]
    public double? RatingValue { get; init; }

    /// <summary>
    /// Number of reviews in the specified country
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("review_count")]
    public int? ReviewCount { get; init; }

    /// <summary>
    /// Weighted average Rating value
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("rating_avg")]
    public double? RatingAvg { get; init; }

    /// <summary>
    /// Total reviews as detected by AppstoreSpy
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("review_total")]
    public double? ReviewTotal { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("revenue")]
    public int? Revenue { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("downloads")]
    public int? Downloads { get; init; }

    /// <summary>
    /// App version, optional if app has multiple versions
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("version")]
    public string? Version { get; init; }

    /// <summary>
    /// App size in bytes, optional if app has multiple versions
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("size")]
    public int? Size { get; init; }

    /// <summary>
    /// The last time the app was updated on Google Play
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("updated")]
    public string? Updated { get; init; }

    /// <summary>
    /// The release date as detected by AppstoreSpy
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("released")]
    public string? Released { get; init; }

    /// <summary>
    /// Age in days as detected by AppstoreSpy
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("age")]
    public int? Age { get; init; }

    /// <summary>
    /// The removal date as detected by AppstoreSpy
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("removed")]
    public string? Removed { get; init; }

    /// <summary>
    /// The last crawled time by AppstoreSpy
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("crawled")]
    public string? Crawled { get; init; }

    /// <summary>
    /// Top 5 revenue country
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("top_countries_revenue")]
    public IReadOnlyList<string>? TopCountriesRevenue { get; init; }

    /// <summary>
    /// Top 5 downloads country
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("top_countries_downloads")]
    public IReadOnlyList<string>? TopCountriesDownloads { get; init; }

    /// <summary>
    /// Hosts
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("hosts")]
    public IReadOnlyList<string>? Hosts { get; init; }

    /// <summary>
    /// countries
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("countries_list")]
    public IReadOnlyList<string>? CountriesList { get; init; }

    /// <summary>
    /// Url to AppstoreSpy
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("url_appstorespy")]
    public string? UrlAppstorespy { get; init; }

    /// <summary>
    /// The last transfer date as detected by AppstoreSpy
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("transferred")]
    public string? Transferred { get; init; }

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
    /// About developer: phone number
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("about_phone")]
    public string? AboutPhone { get; init; }

    /// <summary>
    /// About developer: address
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("about_address")]
    public string? AboutAddress { get; init; }

    /// <summary>
    /// App support: phone number
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("support_phone")]
    public string? SupportPhone { get; init; }

    /// <summary>
    /// Address: country
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("address_country")]
    public string? AddressCountry { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
