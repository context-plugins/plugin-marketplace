using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;
using Basiq.Core.Models;

namespace Basiq.Models;

public record AccountInsightResponse
{
    /// <summary>
    /// The type of response object
    /// </summary>
    [JsonPropertyName("type")]
    public string Type { get; } = "insight";

    /// <summary>
    /// Unique identifier for this insight
    /// </summary>
    [JsonPropertyName("id")]
    public required Guid Id { get; init; }

    /// <summary>
    /// Timestamp when the insight was created
    /// </summary>
    [JsonPropertyName("created")]
    public required DateTimeOffset Created { get; init; }

    /// <summary>
    /// The type of insight
    /// </summary>
    [JsonPropertyName("insightType")]
    public string InsightType { get; } = "account";

    /// <summary>
    /// Array of account insight data
    /// </summary>
    [JsonPropertyName("data")]
    public required IReadOnlyList<AccountInsightData> Data { get; init; }

    [JsonPropertyName("links")]
    public required Links1InsightsApi Links { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
