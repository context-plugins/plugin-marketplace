using System.Text.Json.Serialization;
using Asana.Core.Models;

namespace Asana.Models;

public record UsersUserTaskListResponse
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("data")]
    public UserTaskListResponse? Data { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
