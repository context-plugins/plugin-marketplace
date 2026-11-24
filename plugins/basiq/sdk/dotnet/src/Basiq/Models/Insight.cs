using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;
using Basiq.Core.Models;
using Basiq.Models.AnyOf;
using Basiq.Models.Enums;

namespace Basiq.Models;

public record Insight
{
    /// <summary>
    /// Resource type indicator
    /// </summary>
    [JsonPropertyName("type")]
    public string Type { get; } = "insight";

    /// <summary>
    /// Unique identifier for the insight
    /// </summary>
    [JsonPropertyName("id")]
    public required Guid Id { get; init; }

    /// <summary>
    /// ISO 8601 timestamp of when the insight was created
    /// </summary>
    [JsonPropertyName("created")]
    public required DateTimeOffset Created { get; init; }

    /// <summary>
    /// Array of user IDs associated with this insight. Present only on insights created via POST /insights (multi-user).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("users")]
    public IReadOnlyList<Guid>? Users { get; init; }

    /// <summary>
    /// Type of insight: account verification, balance verification, identity verification, income verification, or expense-ratio
    /// </summary>
    [JsonPropertyName("insightType")]
    public required InsightType1 InsightType { get; init; }

    /// <summary>
    /// Array of insight data objects, structure varies by insightType
    /// </summary>
    [JsonPropertyName("data")]
    public required IReadOnlyList<Datum1InsightsApi> Data { get; init; }

    [JsonPropertyName("links")]
    public required Links3 Links { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
