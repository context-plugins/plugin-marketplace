using System.Collections.Generic;
using System.Text.Json.Serialization;
using FinixApiReference.Core.Models;
using FinixApiReference.Models.Enums;

namespace FinixApiReference.Models;

/// <summary>
/// Configuration settings for a MONTHLY rule.
/// </summary>
public record MonthlyRuleConfiguration
{
    /// <summary>
    /// The type of rule configuration. <c>TIME_RANGE</c> rules reset based on a time frame.
    /// </summary>
    [JsonPropertyName("type")]
    public string Type { get; } = "TIME_RANGE";

    /// <summary>
    /// ISO 4217 3-letter currency code.
    /// </summary>
    [JsonPropertyName("currency")]
    public required Currency Currency { get; init; }

    /// <summary>
    /// How often the rule resets. For this schema, always <c>MONTHLY</c>.
    /// </summary>
    [JsonPropertyName("time_frame")]
    public string TimeFrame { get; } = "MONTHLY";

    /// <summary>
    /// The time at which the rule resets. Accepts a value between <c>0</c> to <c>24</c>.
    /// </summary>
    [JsonPropertyName("start_time")]
    public required int StartTime { get; init; }

    /// <summary>
    /// The time zone used to determine when the rule resets.
    /// </summary>
    [JsonPropertyName("time_zone")]
    public required string TimeZone { get; init; }

    /// <summary>
    /// The day of the month that the rule resets.
    /// </summary>
    [JsonPropertyName("start_date")]
    public required int StartDate { get; init; }

    /// <summary>
    /// A list of rules for MONTHLY time frame.
    /// </summary>
    [JsonPropertyName("rules")]
    public required IReadOnlyList<Rule> Rules { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
