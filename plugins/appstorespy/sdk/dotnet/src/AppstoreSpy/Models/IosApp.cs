using System.Collections.Generic;
using System.Text.Json.Serialization;
using AppstoreSpy.Core.Models;

namespace AppstoreSpy.Models;

public record IosApp
{
    /// <summary>
    /// App ID
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("id")]
    public string? Id { get; init; }

    /// <summary>
    /// App bundle
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("bundle")]
    public string? Bundle { get; init; }

    /// <summary>
    /// Requested country
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("country")]
    public string? Country { get; init; }

    /// <summary>
    /// Requested language
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("lang")]
    public string? Lang { get; init; }

    /// <summary>
    /// Published
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("published")]
    public bool? Published { get; init; }

    /// <summary>
    /// Availability in the specified country
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("available")]
    public bool? Available { get; init; }

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
    /// App category.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("category")]
    public IReadOnlyList<string>? Category { get; init; }

    /// <summary>
    /// App type - APP | GAME
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("type")]
    public string? Type { get; init; }

    /// <summary>
    /// App's developer email
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("emails")]
    public IReadOnlyList<string>? Emails { get; init; }

    /// <summary>
    /// App's website
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("website")]
    public string? Website { get; init; }

    /// <summary>
    /// Link to App Store
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("url")]
    public string? Url { get; init; }

    /// <summary>
    /// ...
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("privacy_policy")]
    public string? PrivacyPolicy { get; init; }

    /// <summary>
    /// App version.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("version")]
    public string? Version { get; init; }

    /// <summary>
    /// Date of release - YYYY-MM-DD
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("released")]
    public string? Released { get; init; }

    /// <summary>
    /// Date of update - YYYY-MM-DD
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("updated")]
    public string? Updated { get; init; }

    /// <summary>
    /// App's size in bytes.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("size")]
    public int? Size { get; init; }

    /// <summary>
    /// Inapp advertisement
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("iap")]
    public bool? Iap { get; init; }

    /// <summary>
    /// App's developer ID
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
    /// Number of ratings
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("rating_count")]
    public int? RatingCount { get; init; }

    /// <summary>
    /// Rating value in requested country
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("rating_value")]
    public double? RatingValue { get; init; }

    /// <summary>
    /// Weighted average Rating value
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("rating_avg")]
    public double? RatingAvg { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("revenue")]
    public int? Revenue { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("downloads")]
    public int? Downloads { get; init; }

    /// <summary>
    /// App's devices list
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("devices")]
    public IReadOnlyList<object>? Devices { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("arcade")]
    public bool? Arcade { get; init; }

    /// <summary>
    /// App's name on requested language
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("name")]
    public string? Name { get; init; }

    /// <summary>
    /// App's short description on requested language
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("short")]
    public string? Short { get; init; }

    /// <summary>
    /// App's new version changes on requested language
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("whatsnew")]
    public string? Whatsnew { get; init; }

    /// <summary>
    /// App's full description on requested language
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("description")]
    public string? Description { get; init; }

    /// <summary>
    /// App's image
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("icon")]
    public string? Icon { get; init; }

    /// <summary>
    /// App's trailer
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("trailer")]
    public string? Trailer { get; init; }

    /// <summary>
    /// App's languages list
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("languages")]
    public IReadOnlyList<object>? Languages { get; init; }

    /// <summary>
    /// Last crawled date
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("crawled")]
    public string? Crawled { get; init; }

    /// <summary>
    /// Date of remove app
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("removed")]
    public string? Removed { get; init; } = "";

    /// <summary>
    /// How long does the application exist in days
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("age")]
    public int? Age { get; init; }

    /// <summary>
    /// Screenshots in the specified language
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("screenshots")]
    public IReadOnlyList<string>? Screenshots { get; init; }

    /// <summary>
    /// iPhone Duo inner display screenshots in the specified language, null when the app has none
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("screenshots_duo_inner")]
    public IReadOnlyList<string>? ScreenshotsDuoInner { get; init; }

    /// <summary>
    /// iPhone Duo outer display screenshots in the specified language, null when the app has none
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("screenshots_duo_outer")]
    public IReadOnlyList<string>? ScreenshotsDuoOuter { get; init; }

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
    /// Copyright
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("copyright")]
    public string? Copyright { get; init; }

    /// <summary>
    /// Seller
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("seller")]
    public string? Seller { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
