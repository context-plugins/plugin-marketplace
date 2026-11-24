using System.Text.Json.Serialization;
using Hightouch.Core.Models;

namespace Hightouch.Models;

public record Config
{
    /// <summary>
    /// When true, the Decision Engine uses each variant's localeValues to select
    /// locale-appropriate content at runtime. When false or omitted, only the
    /// default variant value is used, even if localeValues are present.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("localizationEnabled")]
    public bool? LocalizationEnabled { get; init; }

    /// <summary>
    /// Rolling window in days for the maxSendsPerUser limit
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("maxSendsPerUserWindowDays")]
    public double? MaxSendsPerUserWindowDays { get; init; }

    /// <summary>
    /// Maximum number of times this variable's variants can be sent to a single user
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("maxSendsPerUser")]
    public double? MaxSendsPerUser { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
