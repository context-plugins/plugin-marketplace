using System.Text.Json.Serialization;
using Lusha.Core.Models;

namespace Lusha.Models;

public record EmployeeCountLushaLookalikesApi
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("exact")]
    public int? Exact { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
