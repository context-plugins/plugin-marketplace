using System.Text.Json.Serialization;
using AmazonDevOpsGuru.Core.Models;

namespace AmazonDevOpsGuru.Models;

public record ThrottlingExceptionError
{
    [JsonPropertyName("Message")]
    public required string Message { get; init; }

    /// <summary>
    /// The code of the quota that was exceeded, causing the throttling exception.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("QuotaCode")]
    public string? QuotaCode { get; init; }

    /// <summary>
    /// The code of the service that caused the throttling exception.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("ServiceCode")]
    public string? ServiceCode { get; init; }

    /// <summary>
    /// The number of seconds after which the action that caused the throttling exception can be retried.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("RetryAfterSeconds")]
    public int? RetryAfterSeconds { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
