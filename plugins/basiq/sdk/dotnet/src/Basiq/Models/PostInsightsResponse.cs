using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;
using Basiq.Core.Models;
using Basiq.Models.AnyOf;
using Basiq.Models.Enums;

namespace Basiq.Models;

/// <summary>
/// Response for an insight created via POST /insights. Includes a <c>users</c> array reflecting the users from the request.
/// </summary>
public record PostInsightsResponse
{
    /// <summary>
    /// Resource type indicator
    /// </summary>
    [JsonPropertyName("type")]
    public string Type { get; } = "insight";

    /// <summary>
    /// Unique identifier for this insight
    /// </summary>
    [JsonPropertyName("id")]
    public required Guid Id { get; init; }

    /// <summary>
    /// ISO 8601 timestamp of when the insight was created
    /// </summary>
    [JsonPropertyName("created")]
    public required DateTimeOffset Created { get; init; }

    /// <summary>
    /// Array of user IDs for whom the insight was generated. Mirrors the <c>users</c> field from the request.
    /// </summary>
    [JsonPropertyName("users")]
    public required IReadOnlyList<Guid> Users { get; init; }

    /// <summary>
    /// Type of insight returned
    /// </summary>
    [JsonPropertyName("insightType")]
    public required InsightType InsightType { get; init; }

    /// <summary>
    /// Array containing the insight result. Shape varies by insightType.
    /// </summary>
    [JsonPropertyName("data")]
    public required IReadOnlyList<DatumInsightsApi> Data { get; init; }

    /// <summary>
    /// For multi-user insights the self link uses the first userId from the users array.
    /// </summary>
    [JsonPropertyName("links")]
    public required LinksInsightsApi Links { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
