using System.Collections.Generic;
using System.Text.Json.Serialization;
using Asana.Core.Models;

namespace Asana.Models;

public record UsersTeamsResponse
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("data")]
    public IReadOnlyList<TeamCompact>? Data { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
