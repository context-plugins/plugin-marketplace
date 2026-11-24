using System.Text.Json.Serialization;
using DidLogic.Core.Models;
using DidLogic.Models.Enums;

namespace DidLogic.Models;

public record LogDidlogicComRiskChecksApi
{
    /// <summary>
    /// Log identifier
    /// </summary>
    [JsonPropertyName("id")]
    public required int Id { get; init; }

    /// <summary>
    /// Phone number that was checked
    /// </summary>
    [JsonPropertyName("number")]
    public required string Number { get; init; }

    /// <summary>
    /// Check status
    /// </summary>
    [JsonPropertyName("status")]
    public required Status4 Status { get; init; }

    /// <summary>
    /// Risk assessment level
    /// </summary>
    [JsonPropertyName("risk_level")]
    public required RiskLevel1 RiskLevel { get; init; }

    /// <summary>
    /// Risk category
    /// </summary>
    [JsonPropertyName("category")]
    public required object Category { get; init; }

    /// <summary>
    /// Parent task identifier
    /// </summary>
    [JsonPropertyName("task_id")]
    public required int TaskId { get; init; }

    /// <summary>
    /// Processing completion timestamp
    /// </summary>
    [JsonPropertyName("processed_at")]
    public required string ProcessedAt { get; init; }

    /// <summary>
    /// Log creation timestamp
    /// </summary>
    [JsonPropertyName("created_at")]
    public required string CreatedAt { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
