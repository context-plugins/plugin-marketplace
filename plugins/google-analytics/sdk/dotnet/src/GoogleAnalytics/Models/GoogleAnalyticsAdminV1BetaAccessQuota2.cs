using System.Text.Json.Serialization;
using GoogleAnalytics.Core.Models;

namespace GoogleAnalytics.Models;

/// <summary>
/// The quota state for this Analytics property including this request. This field doesn't work with account-level requests.
/// </summary>
public record GoogleAnalyticsAdminV1BetaAccessQuota2
{
    /// <summary>
    /// Properties can use up to 25% of their tokens per project per hour. This amounts to Analytics 360 Properties can use 12,500 tokens per project per hour. An API request consumes a single number of tokens, and that number is deducted from all of the hourly, daily, and per project hourly quotas.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("tokensPerProjectPerHour")]
    public GoogleAnalyticsAdminV1BetaAccessQuotaStatus6? TokensPerProjectPerHour { get; init; }

    /// <summary>
    /// Properties can use 250,000 tokens per day. Most requests consume fewer than 10 tokens.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("tokensPerDay")]
    public GoogleAnalyticsAdminV1BetaAccessQuotaStatus1? TokensPerDay { get; init; }

    /// <summary>
    /// Properties can use up to 50 concurrent requests.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("concurrentRequests")]
    public GoogleAnalyticsAdminV1BetaAccessQuotaStatus2? ConcurrentRequests { get; init; }

    /// <summary>
    /// Properties and cloud project pairs can have up to 50 server errors per hour.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("serverErrorsPerProjectPerHour")]
    public GoogleAnalyticsAdminV1BetaAccessQuotaStatus3? ServerErrorsPerProjectPerHour { get; init; }

    /// <summary>
    /// Properties can use 50,000 tokens per hour. An API request consumes a single number of tokens, and that number is deducted from all of the hourly, daily, and per project hourly quotas.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("tokensPerHour")]
    public GoogleAnalyticsAdminV1BetaAccessQuotaStatus4? TokensPerHour { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
