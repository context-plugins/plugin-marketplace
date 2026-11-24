using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using Deliverd.Core.Models;

namespace Deliverd.Models;

public record ApiV1AiSystemsModelChangeRequest
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("provider")]
    [MaxLength(120)]
    public string? Provider { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("model")]
    [MaxLength(200)]
    public string? Model { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("modelVersion")]
    [MaxLength(120)]
    public string? ModelVersion { get; init; }

    /// <summary>
    /// A digest of the new prompt (sha256:…, a commit, a version tag); null when it is no longer recorded
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("promptHash")]
    [StringLength(200, MinimumLength = 1)]
    public string? PromptHash { get; init; }

    /// <summary>
    /// A digest of the new guardrail configuration; null when it is no longer recorded
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("guardrailsHash")]
    [StringLength(200, MinimumLength = 1)]
    public string? GuardrailsHash { get; init; }

    /// <summary>
    /// What changed and why, for the record
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("note")]
    [MaxLength(2000)]
    public string? Note { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
