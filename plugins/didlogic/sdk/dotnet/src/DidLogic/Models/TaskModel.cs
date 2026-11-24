using System.Text.Json.Serialization;
using DidLogic.Core.Models;
using DidLogic.Models.Enums;

namespace DidLogic.Models;

public record TaskModel
{
    /// <summary>
    /// Task identifier
    /// </summary>
    [JsonPropertyName("id")]
    public required int Id { get; init; }

    /// <summary>
    /// Task status
    /// </summary>
    [JsonPropertyName("status")]
    public required Status1DidlogicComRiskChecksApi Status { get; init; }

    /// <summary>
    /// Processing completion timestamp
    /// </summary>
    [JsonPropertyName("processed_at")]
    public required string ProcessedAt { get; init; }

    /// <summary>
    /// Task creation timestamp
    /// </summary>
    [JsonPropertyName("created_at")]
    public required string CreatedAt { get; init; }

    /// <summary>
    /// Total numbers in the task
    /// </summary>
    [JsonPropertyName("total_numbers")]
    public required int TotalNumbers { get; init; }

    /// <summary>
    /// Number of completed checks
    /// </summary>
    [JsonPropertyName("completed_count")]
    public required int CompletedCount { get; init; }

    /// <summary>
    /// Number of failed checks
    /// </summary>
    [JsonPropertyName("failed_count")]
    public required int FailedCount { get; init; }

    /// <summary>
    /// Number of pending checks
    /// </summary>
    [JsonPropertyName("pending_count")]
    public required int PendingCount { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
