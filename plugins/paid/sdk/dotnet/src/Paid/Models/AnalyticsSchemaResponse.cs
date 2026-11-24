using System.Collections.Generic;
using System.Text.Json.Serialization;
using Paid.Core.Models;

namespace Paid.Models;

public record AnalyticsSchemaResponse
{
    [JsonPropertyName("views")]
    public required IReadOnlyList<AnalyticsSchemaView> Views { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
