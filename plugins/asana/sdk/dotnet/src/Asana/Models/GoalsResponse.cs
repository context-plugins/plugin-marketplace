using System.Text.Json.Serialization;
using Asana.Core.Models;

namespace Asana.Models;

public record GoalsResponse
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("data")]
    public GoalResponse? Data { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
