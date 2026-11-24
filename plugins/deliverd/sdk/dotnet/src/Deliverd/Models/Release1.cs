using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;

namespace Deliverd.Models;

/// <summary>
/// The release the results tested — any of provider, model, modelVersion, promptHash, guardrailsHash — with results, a report or a pull. Evidence that names another release than the AI system now runs does not count towards a control
/// </summary>
public record Release1
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("provider")]
    [StringLength(120, MinimumLength = 1)]
    public string? Provider { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("model")]
    [StringLength(200, MinimumLength = 1)]
    public string? Model { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("modelVersion")]
    [StringLength(120, MinimumLength = 1)]
    public string? ModelVersion { get; init; }

    /// <summary>
    /// The prompt's digest, as the release recorded it: sha256:…, a commit or a tag
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("promptHash")]
    public string? PromptHash { get; init; }

    /// <summary>
    /// The guardrail configuration's digest
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("guardrailsHash")]
    public string? GuardrailsHash { get; init; }
}
