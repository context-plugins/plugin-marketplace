using System.Collections.Generic;
using System.Text.Json.Serialization;

namespace Basiq.Models;

public record Data
{
    [JsonPropertyName("retainData")]
    public required bool RetainData { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("initialRetrievalDays")]
    public int? InitialRetrievalDays { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("organisation")]
    public bool? Organisation { get; init; }

    [JsonPropertyName("permissions")]
    public required IReadOnlyList<Permission> Permissions { get; init; }
}
