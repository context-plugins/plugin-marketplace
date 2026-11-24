using System.Collections.Generic;
using System.Text.Json.Serialization;
using Bitly.Core.Models;
using Bitly.Models.Enums;

namespace Bitly.Models;

/// <summary>
/// A dynamic routing rule that redirects traffic to a different destination based on user attributes.
/// </summary>
public record DynamicRoutingRule
{
    /// <summary>
    /// The destination URL for requests matching this rule.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("long_url")]
    public string? LongUrl { get; init; }

    /// <summary>
    /// ISO 3166-1 alpha-2 country codes that trigger this rule (e.g., ["US", "CA"]).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("country_match")]
    public IReadOnlyList<string>? CountryMatch { get; init; }

    /// <summary>
    /// ISO 3166-1 alpha-2 country codes that must NOT match for this rule to apply.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("country_exclude")]
    public IReadOnlyList<string>? CountryExclude { get; init; }

    /// <summary>
    /// ISO 3166-2 region codes that trigger this rule (e.g., ["US-CA", "CA-ON"]).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("region_match")]
    public IReadOnlyList<string>? RegionMatch { get; init; }

    /// <summary>
    /// ISO 3166-2 region codes that must NOT match for this rule to apply (e.g., ["US-CA", "CA-ON"]).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("region_exclude")]
    public IReadOnlyList<string>? RegionExclude { get; init; }

    /// <summary>
    /// Device types that trigger this rule (e.g., ["mobile", "tablet"]).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("device_match")]
    public IReadOnlyList<DynamicRoutingDeviceEnum>? DeviceMatch { get; init; }

    /// <summary>
    /// Device types that must NOT match for this rule to apply.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("device_exclude")]
    public IReadOnlyList<DynamicRoutingDeviceEnum>? DeviceExclude { get; init; }

    /// <summary>
    /// Operating systems that trigger this rule (e.g., ["ios", "android"]).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("os_match")]
    public IReadOnlyList<DynamicRoutingPlatformEnum>? OsMatch { get; init; }

    /// <summary>
    /// Operating systems that must NOT match for this rule to apply.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("os_exclude")]
    public IReadOnlyList<DynamicRoutingPlatformEnum>? OsExclude { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
