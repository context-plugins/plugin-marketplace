using System.Collections.Generic;
using System.Text.Json.Serialization;
using Paid.Core.Models;

namespace Paid.Models;

public record AnalyticsSchemaView
{
    [JsonPropertyName("name")]
    public required string Name { get; init; }

    [JsonPropertyName("comment")]
    public required string Comment { get; init; }

    [JsonPropertyName("columns")]
    public required IReadOnlyList<AnalyticsSchemaColumn> Columns { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
