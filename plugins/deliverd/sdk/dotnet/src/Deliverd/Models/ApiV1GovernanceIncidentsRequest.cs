using System;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using Deliverd.Core.Models;
using Deliverd.Models.Enums;

namespace Deliverd.Models;

public record ApiV1GovernanceIncidentsRequest
{
    /// <summary>
    /// The governed task it concerns
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("taskId")]
    public Guid? TaskId { get; init; }

    /// <summary>
    /// The AI system it concerns; the task's own system when only taskId is given
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("aiSystemId")]
    public Guid? AiSystemId { get; init; }

    [JsonPropertyName("title")]
    [StringLength(200, MinimumLength = 1)]
    public required string Title { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("description")]
    [MaxLength(4000)]
    public string? Description { get; init; }

    /// <summary>
    /// high or critical closes the governance gate until a person resolves it
    /// </summary>
    [JsonPropertyName("severity")]
    public required Severity1 Severity { get; init; }

    /// <summary>
    /// When the organisation became aware of it, if earlier than now. DORA's reporting clocks start here
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("detectedAt")]
    public DateTimeOffset? DetectedAt { get; init; }

    /// <summary>
    /// What kind of incident it was, which the AI risk scorecard counts: data_disclosure, sensitive_data, prompt_injection, fairness, wrong_output, outage, unauthorised_action or other
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("category")]
    public Category? Category { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
