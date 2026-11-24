using System.Text.Json.Serialization;
using GoogleAnalytics.Core.Models;

namespace GoogleAnalytics.Models;

/// <summary>
/// A resource message representing data sharing settings of a Google Analytics account.
/// </summary>
public record GoogleAnalyticsAdminV1BetaDataSharingSettings
{
    /// <summary>
    /// Allows Google technical support representatives access to your Google Analytics data and account when necessary to provide service and find solutions to technical issues. This field maps to the "Technical support" field in the Google Analytics Admin UI.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("sharingWithGoogleSupportEnabled")]
    public bool? SharingWithGoogleSupportEnabled { get; init; }

    /// <summary>
    /// Allows Google access to your Google Analytics account data, including account usage and configuration data, product spending, and users associated with your Google Analytics account, so that Google can help you make the most of Google products, providing you with insights, offers, recommendations, and optimization tips across Google Analytics and other Google products for business. This field maps to the "Recommendations for your business" field in the Google Analytics Admin UI.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("sharingWithGoogleAssignedSalesEnabled")]
    public bool? SharingWithGoogleAssignedSalesEnabled { get; init; }

    /// <summary>
    /// Deprecated. This field is no longer used and always returns false.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("sharingWithGoogleAnySalesEnabled")]
    public bool? SharingWithGoogleAnySalesEnabled { get; init; }

    /// <summary>
    /// Enable features like predictions, modeled data, and benchmarking that can provide you with richer business insights when you contribute aggregated measurement data. The data you share (including information about the property from which it is shared) is aggregated and de-identified before being used to generate business insights. This field maps to the "Modeling contributions &amp; business insights" field in the Google Analytics Admin UI.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("sharingWithOthersEnabled")]
    public bool? SharingWithOthersEnabled { get; init; }

    /// <summary>
    /// Identifier. Resource name. Format: accounts/{account}/dataSharingSettings Example: "accounts/1000/dataSharingSettings"
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("name")]
    public string? Name { get; init; }

    /// <summary>
    /// Allows Google to use the data to improve other Google products or services. This fields maps to the "Google products &amp; services" field in the Google Analytics Admin UI.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("sharingWithGoogleProductsEnabled")]
    public bool? SharingWithGoogleProductsEnabled { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
