using System;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using Deliverd.Core.Models;

namespace Deliverd.Models;

/// <summary>
/// The run this belongs to, found by its id or started. Use instead of flowId
/// </summary>
public record Execution
{
    /// <summary>
    /// Your platform's id for this run
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("providerExecutionId")]
    [StringLength(200, MinimumLength = 1)]
    public string? ProviderExecutionId { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("objective")]
    [MaxLength(4000)]
    public string? Objective { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("title")]
    [MaxLength(200)]
    public string? Title { get; init; }

    /// <summary>
    /// The run that delegated this one
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("parentFlowId")]
    public Guid? ParentFlowId { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
