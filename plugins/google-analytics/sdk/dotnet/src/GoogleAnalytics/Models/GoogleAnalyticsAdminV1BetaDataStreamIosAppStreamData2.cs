using System.Text.Json.Serialization;
using GoogleAnalytics.Core.Models;

namespace GoogleAnalytics.Models;

/// <summary>
/// Data specific to iOS app streams. Must be populated if type is IOS_APP_DATA_STREAM.
/// </summary>
public record GoogleAnalyticsAdminV1BetaDataStreamIosAppStreamData2
{
    /// <summary>
    /// Output only. ID of the corresponding iOS app in Firebase, if any. This ID can change if the iOS app is deleted and recreated.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("firebaseAppId")]
    public string? FirebaseAppId { get; init; }

    /// <summary>
    /// Required. Immutable. The Apple App Store Bundle ID for the app Example: "com.example.myiosapp"
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("bundleId")]
    public string? BundleId { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
