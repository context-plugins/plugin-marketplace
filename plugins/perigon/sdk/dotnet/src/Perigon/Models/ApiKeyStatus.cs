using System.Text.Json.Serialization;
using Perigon.Core.Models;

namespace Perigon.Models;

/// <summary>
/// Validity and status of a single API key.
/// </summary>
public record ApiKeyStatus
{
    /// <summary>
    /// Masked preview of the supplied API key.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("keyPreview")]
    public string? KeyPreview { get; init; }

    /// <summary>
    /// Whether the supplied API key is valid and belongs to the authenticated account.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("valid")]
    public bool? Valid { get; init; }

    /// <summary>
    /// Whether the API key is enabled. A disabled ('off') key is valid but cannot be used to make requests. False when the key is not valid.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("enabled")]
    public bool? Enabled { get; init; }

    /// <summary>
    /// Whether the account owning the key has an active subscription or trial.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("subscriptionActive")]
    public bool? SubscriptionActive { get; init; }

    /// <summary>
    /// Approx number of requests made with this API key in this billing cycle.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("requestCount")]
    public long? RequestCount { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
