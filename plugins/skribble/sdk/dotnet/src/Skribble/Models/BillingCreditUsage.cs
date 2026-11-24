using System.Collections.Generic;
using System.Text.Json.Serialization;
using Skribble.Core.Models;

namespace Skribble.Models;

public record BillingCreditUsage
{
    /// <summary>
    /// Billing period in YYYYMM format
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("period")]
    public string? Period { get; init; }

    /// <summary>
    /// Array of consumptions, each detailing an endpoint use and its credit usage
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("usage")]
    public IReadOnlyList<CreditUsage>? Usage { get; init; }

    /// <summary>
    /// Total of requests made
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("requests")]
    public int? Requests { get; init; }

    /// <summary>
    /// Total of credits used
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("credits")]
    public int? Credits { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
