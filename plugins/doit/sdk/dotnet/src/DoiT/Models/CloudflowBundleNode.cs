using System.Collections.Generic;
using System.Text.Json.Serialization;
using DoiT.Core.Models;

namespace DoiT.Models;

public record CloudflowBundleNode
{
    [JsonPropertyName("key")]
    public required string Key { get; init; }

    [JsonPropertyName("name")]
    public required string Name { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("description")]
    public string? Description { get; init; }

    /// <summary>
    /// Node type (e.g. <c>triggerNode</c>, <c>actionNode</c>, <c>datastoreNode</c>). Validated against the supported node-type set at import.
    /// </summary>
    [JsonPropertyName("type")]
    public required string Type { get; init; }

    /// <summary>
    /// Node parameters with tenant-scoped scalar references replaced by <c>$req:</c>/<c>$bundle:</c> tokens.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("parameters")]
    public object? Parameters { get; init; }

    /// <summary>
    /// Approval configuration without recipients (recipients are tenant-scoped and removed at export).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("approval")]
    public Approval? Approval { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("transitions")]
    public IReadOnlyList<Transition>? Transitions { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
