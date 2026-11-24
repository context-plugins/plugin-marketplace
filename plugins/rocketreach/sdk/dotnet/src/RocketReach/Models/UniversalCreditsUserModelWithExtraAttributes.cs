using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using RocketReach.Core.Models;
using RocketReach.Core.Validation.Attributes;
using RocketReach.Models.Enums;

namespace RocketReach.Models;

public record UniversalCreditsUserModelWithExtraAttributes
{
    /// <summary>
    /// RocketReach internal unique user ID
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("id")]
    public int? Id { get; init; }

    /// <summary>
    /// First name of the user
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("first_name")]
    [MaxLength(32)]
    public string? FirstName { get; init; }

    /// <summary>
    /// Last name of the user
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("last_name")]
    [MaxLength(32)]
    public string? LastName { get; init; }

    /// <summary>
    /// Email for the user
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("email")]
    [MaxLength(128)]
    public string? Email { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("state")]
    public StateEnum? State { get; init; }

    /// <summary>
    /// Object representing the user's plan
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("plan")]
    public Plan2? Plan { get; init; }

    /// <summary>
    /// API Key for the user
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("api_key")]
    public string? ApiKey { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("api_key_domain")]
    [MaxLength(256)]
    public string? ApiKeyDomain { get; init; }

    /// <summary>
    /// Number of API calls made today by the user
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("daily_api_num_calls")]
    [Minimum(-2147483648)]
    [Maximum(2147483647)]
    public int? DailyApiNumCalls { get; init; }

    /// <summary>
    /// Maximum number of daily API calls for the user
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("daily_api_limit")]
    public string? DailyApiLimit { get; init; }

    /// <summary>
    /// Objects representing the user's credit usage
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("credit_usage")]
    public UniversalCreditUsage? CreditUsage { get; init; }

    /// <summary>
    /// Objects representing the user's credit usage by credit_action type
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("credit_usage_by_action")]
    public IReadOnlyList<UniversalCreditUsageByAction>? CreditUsageByAction { get; init; }

    /// <summary>
    /// Objects representing the user's rate limits by request type
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("rate_limits")]
    public IReadOnlyList<RateLimit>? RateLimits { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
