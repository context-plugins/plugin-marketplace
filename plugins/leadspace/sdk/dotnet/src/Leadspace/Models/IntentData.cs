using System.Text.Json.Serialization;
using Leadspace.Core.Models;
using Leadspace.Models.Enums;

namespace Leadspace.Models;

public record IntentData
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("status")]
    public Status1? Status { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("domain_used")]
    public string? DomainUsed { get; init; }

    /// <summary>
    /// Company's top surging intent topics; "No Surging Topics" when empty
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("domain_intent")]
    public string? DomainIntent { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("intent_modeling_scores")]
    public IntentModelingScores? IntentModelingScores { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
