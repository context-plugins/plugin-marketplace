using System.Collections.Generic;
using System.Text.Json.Serialization;
using DoiT.Core.Models;

namespace DoiT.Models;

public record Flow
{
    [JsonPropertyName("key")]
    public required string Key { get; init; }

    /// <summary>
    /// The created flow's ID in the target tenant.
    /// </summary>
    [JsonPropertyName("id")]
    public required string Id { get; init; }

    [JsonPropertyName("name")]
    public required string Name { get; init; }

    [JsonPropertyName("status")]
    public string Status { get; } = "draft";

    /// <summary>
    /// Nodes whose tenant-scoped references could not be bound; fix them in the builder before publishing.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("incompleteNodes")]
    public IReadOnlyList<IncompleteNode>? IncompleteNodes { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
