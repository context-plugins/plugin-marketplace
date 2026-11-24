using System.Text.Json.Serialization;
using GoogleAnalytics.Core.Models;

namespace GoogleAnalytics.Models;

/// <summary>
/// This Google Analytics property's Realtime quota state including this request.
/// </summary>
public record PropertyQuota3
{
    /// <summary>
    /// Analytics Properties can use up to 35% of their tokens per project per hour. This amounts to standard Analytics Properties can use up to 14,000 tokens per project per hour, and Analytics 360 Properties can use 140,000 tokens per project per hour. An API request consumes a single number of tokens, and that number is deducted from all of the hourly, daily, and per project hourly quotas.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("tokensPerProjectPerHour")]
    public QuotaStatus7? TokensPerProjectPerHour { get; init; }

    /// <summary>
    /// Analytics Properties can send up to 120 requests with potentially thresholded dimensions per hour. In a batch request, each report request is individually counted for this quota if the request contains potentially thresholded dimensions.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("potentiallyThresholdedRequestsPerHour")]
    public QuotaStatus1? PotentiallyThresholdedRequestsPerHour { get; init; }

    /// <summary>
    /// Standard Analytics Properties can use up to 200,000 tokens per day; Analytics 360 Properties can use 2,000,000 tokens per day. Most requests consume fewer than 10 tokens.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("tokensPerDay")]
    public QuotaStatus2? TokensPerDay { get; init; }

    /// <summary>
    /// Standard Analytics Properties can send up to 10 concurrent requests; Analytics 360 Properties can use up to 50 concurrent requests.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("concurrentRequests")]
    public QuotaStatus3? ConcurrentRequests { get; init; }

    /// <summary>
    /// Standard Analytics Properties and cloud project pairs can have up to 10 server errors per hour; Analytics 360 Properties and cloud project pairs can have up to 50 server errors per hour.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("serverErrorsPerProjectPerHour")]
    public QuotaStatus4? ServerErrorsPerProjectPerHour { get; init; }

    /// <summary>
    /// Standard Analytics Properties can use up to 40,000 tokens per hour; Analytics 360 Properties can use 400,000 tokens per hour. An API request consumes a single number of tokens, and that number is deducted from all of the hourly, daily, and per project hourly quotas.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("tokensPerHour")]
    public QuotaStatus5? TokensPerHour { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
