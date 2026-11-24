using System.Collections.Generic;
using System.Text.Json.Serialization;
using Surfe.Core.Models;

namespace Surfe.Models;

public record PeopleFindByEmailResponse
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("people")]
    public IReadOnlyList<EnrichedPerson>? People { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
