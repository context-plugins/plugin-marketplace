using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using DoiT.Core.Models;

namespace DoiT.Models;

public record CloudflowBundleFlow
{
    /// <summary>
    /// Bundle-local flow key. Opaque — the server generates new IDs at import.
    /// </summary>
    [JsonPropertyName("key")]
    public required string Key { get; init; }

    [JsonPropertyName("name")]
    public required string Name { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("description")]
    public string? Description { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("tags")]
    public IReadOnlyDictionary<string, object>? Tags { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("triggerType")]
    public string? TriggerType { get; init; }

    /// <summary>
    /// Key of this flow's entry node.
    /// </summary>
    [JsonPropertyName("firstNode")]
    public required string FirstNode { get; init; }

    [JsonPropertyName("nodes")]
    [MaxLength(150)]
    public required IReadOnlyList<CloudflowBundleNode> Nodes { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("localVariables")]
    [MaxLength(50)]
    public IReadOnlyList<CloudflowBundleVariable>? LocalVariables { get; init; }

    /// <summary>
    /// Tenant-scoped references removed at export (policy IDs, Slack channels); import flags the affected nodes incomplete.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("unsupportedReferences")]
    public IReadOnlyList<UnsupportedReference>? UnsupportedReferences { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
