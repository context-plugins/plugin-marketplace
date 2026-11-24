using System.Text.Json.Serialization;
using GoogleAnalytics.Core.Models;

namespace GoogleAnalytics.Models;

/// <summary>
/// Data specific to Android app streams.
/// </summary>
public record GoogleAnalyticsAdminV1BetaDataStreamAndroidAppStreamData
{
    /// <summary>
    /// Output only. ID of the corresponding Android app in Firebase, if any. This ID can change if the Android app is deleted and recreated.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("firebaseAppId")]
    public string? FirebaseAppId { get; init; }

    /// <summary>
    /// Immutable. The package name for the app being measured. Example: "com.example.myandroidapp"
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("packageName")]
    public string? PackageName { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
