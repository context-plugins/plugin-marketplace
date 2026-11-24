using System.Collections.Generic;
using System.Text.Json.Serialization;
using DoiT.Core.Models;

namespace DoiT.Models;

public record Connection
{
    [JsonPropertyName("key")]
    public required string Key { get; init; }

    /// <summary>
    /// Cloud provider the bound connection must have (e.g. <c>amazon-web-services</c>).
    /// </summary>
    [JsonPropertyName("provider")]
    public required string Provider { get; init; }

    /// <summary>
    /// The source connection's display name, as a matching hint.
    /// </summary>
    [JsonPropertyName("name")]
    public required string Name { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("usedByNodes")]
    public IReadOnlyList<string>? UsedByNodes { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
