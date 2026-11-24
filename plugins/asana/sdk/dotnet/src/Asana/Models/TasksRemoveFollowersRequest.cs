using System.Text.Json.Serialization;
using Asana.Core.Models;

namespace Asana.Models;

public record TasksRemoveFollowersRequest
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("data")]
    public TaskRemoveFollowersRequest? Data { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
