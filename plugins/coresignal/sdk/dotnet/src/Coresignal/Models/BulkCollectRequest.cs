using System.Collections.Generic;
using System.Text.Json.Serialization;
using Coresignal.Core.Models;

namespace Coresignal.Models;

public record BulkCollectRequest
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("ids")]
    public IReadOnlyList<long>? Ids { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
