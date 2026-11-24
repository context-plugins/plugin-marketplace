using System.Collections.Generic;
using System.Text.Json.Serialization;
using Asana.Core.Models;

namespace Asana.Models;

public record StatusUpdatesResponse2
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("data")]
    public IReadOnlyList<StatusUpdateCompactAsanaStatusUpdatesApi>? Data { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
