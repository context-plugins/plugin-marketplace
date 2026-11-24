using System.Collections.Generic;
using System.Text.Json.Serialization;
using Ortto.Core.Models;

namespace Ortto.Models;

public record PersonGetByIdsRequest
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("contact_ids")]
    public IReadOnlyList<string>? ContactIds { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("fields")]
    public IReadOnlyList<string>? Fields { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
