using System.Collections.Generic;
using System.Text.Json.Serialization;
using Soda.Core.Models;

namespace Soda.Models;

public record SchemaDiagnosticsV4
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("actual")]
    public IReadOnlyList<SchemaDiagnosticsV4Column>? Actual { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("expected")]
    public IReadOnlyList<SchemaDiagnosticsV4Column>? Expected { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
