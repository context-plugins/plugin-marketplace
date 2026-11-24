using System.Text.Json.Serialization;
using Asana.Core.Models;

namespace Asana.Models;

public record GoalRelationshipsRequest
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("data")]
    public GoalRelationshipRequest? Data { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
