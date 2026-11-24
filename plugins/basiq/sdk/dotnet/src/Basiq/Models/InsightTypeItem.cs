using System.Text.Json.Serialization;
using Basiq.Core.Models;
using Basiq.Models.Enums;

namespace Basiq.Models;

/// <summary>
/// A single supported Insight type entry. The <c>dataSchema</c> field describes only the Insight-specific input — it does not represent the full <c>POST /insights</c> request body.
/// </summary>
public record InsightTypeItem
{
    /// <summary>
    /// Resource type identifier, always <c>insightType</c>.
    /// </summary>
    [JsonPropertyName("type")]
    public string Type { get; } = "insightType";

    /// <summary>
    /// Unique identifier for the Insight type. Maps to the <c>insightType</c> values used by existing Insight endpoints: <c>account</c>, <c>balance</c>, <c>identity</c>, <c>income</c>, <c>expense-ratio</c>.
    /// </summary>
    [JsonPropertyName("id")]
    public required Id Id { get; init; }

    /// <summary>
    /// Whether this Insight type supports multiple users in a single request.
    /// </summary>
    [JsonPropertyName("supportMultipleUsers")]
    public required bool SupportMultipleUsers { get; init; }

    /// <summary>
    /// Human-readable name for the Insight type.
    /// </summary>
    [JsonPropertyName("name")]
    public required string Name { get; init; }

    /// <summary>
    /// Description of what the Insight type verifies.
    /// </summary>
    [JsonPropertyName("description")]
    public required string Description { get; init; }

    /// <summary>
    /// Describes only the Insight-specific input data accepted by existing Insight endpoints for this type. Does not include transport-level fields such as <c>users</c> or <c>type</c>.
    /// </summary>
    [JsonPropertyName("dataSchema")]
    public required object DataSchema { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
