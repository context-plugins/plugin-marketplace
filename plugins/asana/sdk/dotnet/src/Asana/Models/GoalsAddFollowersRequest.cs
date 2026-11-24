using System.Text.Json.Serialization;
using Asana.Core.Models;

namespace Asana.Models;

public record GoalsAddFollowersRequest
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("data")]
    public TaskAddFollowersRequest? Data { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
