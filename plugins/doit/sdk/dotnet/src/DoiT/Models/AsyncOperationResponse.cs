using System;
using System.Text.Json.Serialization;
using DoiT.Core.Models;
using DoiT.Models.Enums;

namespace DoiT.Models;

/// <summary>
/// Response envelope for an async report operation. Returned on 202 (new operation) and 200 (dry-run). On dry-run, operationId is absent and status is "dry_run".
/// </summary>
public record AsyncOperationResponse
{
    /// <summary>
    /// Unique identifier for the operation. Absent on dry-run responses.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("operationId")]
    public string? OperationId { get; init; }

    /// <summary>
    /// Current lifecycle status of the operation.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("status")]
    public Status1DoiTReportsApi? Status { get; init; }

    /// <summary>
    /// Time the operation was created (absent on dry-run).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("createTime")]
    public DateTimeOffset? CreateTime { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
