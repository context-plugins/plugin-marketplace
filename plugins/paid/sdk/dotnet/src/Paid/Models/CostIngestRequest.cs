using System.Collections.Generic;
using System.Text.Json.Serialization;
using Paid.Core.Models;
using Paid.Models.OneOf;

namespace Paid.Models;

public record CostIngestRequest
{
    [JsonPropertyName("costs")]
    public required IReadOnlyList<Cost2> Costs { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
