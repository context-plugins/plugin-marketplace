using System.Text.Json.Serialization;
using GoogleAnalytics.Core.Models;

namespace GoogleAnalytics.Models;

/// <summary>
/// Current state of all quotas for this Analytics property. If any quota for a property is exhausted, all requests to that property will return Resource Exhausted errors.
/// </summary>
public record GoogleAnalyticsAdminV1BetaAccessQuota
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
