using System.Collections.Generic;
using System.Text.Json.Serialization;
using DoiT.Core.Models;

namespace DoiT.Models;

public record Ps4CommitmentsV1GcpBillingAccountsRecommendationsResponse
{
    [JsonPropertyName("items")]
    public required IReadOnlyList<GcpRecommendation> Items { get; init; }

    /// <summary>
    /// Reserved for pagination. Currently always <c>null</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("pageToken")]
    public string? PageToken { get; init; }

    /// <summary>
    /// Number of recommendations returned in <c>items</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("rowCount")]
    public long? RowCount { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
