using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using Deliverd.Core.Models;

namespace Deliverd.Models;

/// <summary>
/// Which agent is asking, in your words. Recorded and shown as declared by you; nothing is decided on it
/// </summary>
public record AgentDeliverdDevApprovalsApi
{
    /// <summary>
    /// What the agent is called, as people know it — "Claims triage"
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("name")]
    [StringLength(200, MinimumLength = 1)]
    public string? Name { get; init; }

    /// <summary>
    /// Who makes or runs it: anthropic, openai, cursor, your own company
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("provider")]
    [StringLength(100, MinimumLength = 1)]
    public string? Provider { get; init; }

    /// <summary>
    /// Your own id for this agent, returned unchanged
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("externalId")]
    [StringLength(200, MinimumLength = 1)]
    public string? ExternalId { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
