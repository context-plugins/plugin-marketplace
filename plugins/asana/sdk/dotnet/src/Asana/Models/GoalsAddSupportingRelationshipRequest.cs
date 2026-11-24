using System.Text.Json.Serialization;
using Asana.Core.Models;

namespace Asana.Models;

public record GoalsAddSupportingRelationshipRequest
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("data")]
    public GoalAddSupportingRelationshipRequest? Data { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
