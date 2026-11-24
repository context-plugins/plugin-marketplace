using System.Text.Json.Serialization;
using DidLogic.Core.Models;
using DidLogic.Models.Enums;

namespace DidLogic.Models;

/// <summary>
/// Created risk check task details
/// </summary>
public record RiskCheckRequest
{
    /// <summary>
    /// Task status
    /// </summary>
    [JsonPropertyName("status")]
    public required Status1DidlogicComRiskChecksApi Status { get; init; }

    /// <summary>
    /// Processing completion timestamp
    /// </summary>
    [JsonPropertyName("processed_at")]
    public required object ProcessedAt { get; init; }

    /// <summary>
    /// Task creation timestamp
    /// </summary>
    [JsonPropertyName("created_at")]
    public required string CreatedAt { get; init; }

    /// <summary>
    /// Task identifier
    /// </summary>
    [JsonPropertyName("task_id")]
    public required int TaskId { get; init; }

    /// <summary>
    /// Total numbers in the request
    /// </summary>
    [JsonPropertyName("total_numbers")]
    public required int TotalNumbers { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
