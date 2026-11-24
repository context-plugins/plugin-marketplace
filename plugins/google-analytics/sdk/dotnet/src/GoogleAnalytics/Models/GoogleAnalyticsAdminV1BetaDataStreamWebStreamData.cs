using System.Text.Json.Serialization;
using GoogleAnalytics.Core.Models;

namespace GoogleAnalytics.Models;

/// <summary>
/// Data specific to web streams.
/// </summary>
public record GoogleAnalyticsAdminV1BetaDataStreamWebStreamData
{
    /// <summary>
    /// Output only. Analytics Measurement ID. Example: "G-1A2BCD345E"
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("measurementId")]
    public string? MeasurementId { get; init; }

    /// <summary>
    /// Domain name of the web app being measured, or empty. Example: "http://www.google.com", "https://www.google.com"
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("defaultUri")]
    public string? DefaultUri { get; init; }

    /// <summary>
    /// Output only. ID of the corresponding web app in Firebase, if any. This ID can change if the web app is deleted and recreated.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("firebaseAppId")]
    public string? FirebaseAppId { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
