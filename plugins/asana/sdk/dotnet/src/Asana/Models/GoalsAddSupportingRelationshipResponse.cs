using System.Text.Json.Serialization;
using Asana.Core.Models;

namespace Asana.Models;

public record GoalsAddSupportingRelationshipResponse
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("data")]
    public GoalRelationshipResponse? Data { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
