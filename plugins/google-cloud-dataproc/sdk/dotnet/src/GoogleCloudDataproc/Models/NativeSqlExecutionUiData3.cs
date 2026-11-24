using System.Collections.Generic;
using System.Text.Json.Serialization;
using GoogleCloudDataproc.Core.Models;

namespace GoogleCloudDataproc.Models;

/// <summary>
/// Native SQL Execution Info
/// </summary>
public record NativeSqlExecutionUiData3
{
    /// <summary>
    /// Required. Execution ID of the Native SQL Execution.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("executionId")]
    public string? ExecutionId { get; init; }

    /// <summary>
    /// Optional. Fallback node to reason.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("fallbackNodeToReason")]
    public IReadOnlyList<FallbackReason>? FallbackNodeToReason { get; init; }

    /// <summary>
    /// Optional. Number of nodes in Native.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("numNativeNodes")]
    public int? NumNativeNodes { get; init; }

    /// <summary>
    /// Optional. Number of nodes fallen back to Spark.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("numFallbackNodes")]
    public int? NumFallbackNodes { get; init; }

    /// <summary>
    /// Optional. Description of the fallback.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("fallbackDescription")]
    public string? FallbackDescription { get; init; }

    /// <summary>
    /// Optional. Description of the execution.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("description")]
    public string? Description { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
